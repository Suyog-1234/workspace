import { generateOtp, matchPassword } from "@/helpers/helpers";
import { prisma } from "@/lib/db/prismaConnection";
import { redisClient } from "@/lib/db/redisConnection";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import twilio from "twilio";

export async function POST(req: NextRequest, res: NextResponse) {
   try {
      const body = await req.json();
      const { email, password } = z.object({ email: z.string(), password: z.string() }).parse(body);

      if (!email || !password) {
         return NextResponse.json({
            message: "Both email and password are required.",
            status: 400
         });
      }

      const foundEmail = await prisma.user.findFirst({ where: { email: email } });

      if (!foundEmail) {
         return NextResponse.json({
            message: "Email doesn't exist in records.",
            status: 404
         });
      }

      const isGenuinePassword = await matchPassword(password, foundEmail.password);
      if (!isGenuinePassword) {
         return NextResponse.json({
            message: "Incorrect password.",
            status: 401
         });
      }

      const otp = generateOtp();

      const redisOperationResult = await redisClient.hSet(`number:${foundEmail.number}`, {
         otp: otp
      });

      if (redisOperationResult !== 1) {
         return NextResponse.json({
            message: "Failed to store OTP in Redis. Please try again.",
            status: 500
         });
      }

      const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
      const twilioMessageResult = await client.messages.create({
         body: `your workplace otp is : ${otp}`,
         from: "+16787016463",
         to: "+91 7841087946"
      });         

      if (twilioMessageResult) {
         await redisClient.expire(`number:${foundEmail.number}`, 60);
         return NextResponse.json({
            message: "OTP has been sent to your number. You have 1 minute to verify.",
            status: 200
         });
      } else {
         return NextResponse.json({
            message: "Failed to send OTP via Twilio. Please try again.",
            status: 500
         });
      }

   } catch (error: any) {
      return NextResponse.json({
         message: "Internal Server Error.",
         error: error.message || "Unknown error",
         status: 500
      });
   }
}