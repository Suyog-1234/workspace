import { generateAccessToken, generateRefreshToken } from "@/helpers/helpers";
import { prisma } from "@/lib/db/prismaConnection";
import { redisClient } from "@/lib/db/redisConnection";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { serialize } from "cookie"

export async function POST(req: NextRequest, res: NextResponse) {
   try {
      const body = await req.json();
      const { email, otp } = z.object({ email: z.string(), otp: z.number() }).parse(body);

      if (!email || !otp) {
         return NextResponse.json({
            message: "All fields required",
            status: 400
         });
      }

      const foundedNumberWithEmail = await prisma.user.findFirst({ where: { email: email } });

      if (!foundedNumberWithEmail) {
         return NextResponse.json({
            message: "Email not found",
            status: 401
         });
      }

      const storedOtp = await redisClient.hGet(`number:${foundedNumberWithEmail.number}`, 'otp');

      if (!storedOtp) {
         return NextResponse.json({
            message: "Otp has expired",
            status: 401
         });
      } else if (parseInt(storedOtp) !== otp) {
         return NextResponse.json({
            message: "Invalid Otp",
            status: 401
         });
      }
      await redisClient.hDel(`number:${foundedNumberWithEmail.number}`, 'otp');

      const accessToken = generateAccessToken({ email: foundedNumberWithEmail.email, companyName: "elaunch solution" })
      const refreshToken = generateRefreshToken({ email: foundedNumberWithEmail.email, companyName: "elaunch solution" });

      const refreshCookie = serialize("jwt", refreshToken, {
         httpOnly: true,
         secure: true,
         sameSite: "none",
         maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      return NextResponse.json({
         message: "OTP verified successfully",
         date: {
            accessToken: accessToken
         },
      }, { status: 200, headers: { "Set-Cookie": refreshCookie } });

   } catch (error) {
      console.error(error);
      return NextResponse.json({
         message: "Internal Server Error",
         status: 500
      });
   }
}