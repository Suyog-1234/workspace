import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: NextRequest,res:NextResponse){
         try {
              const body = await req.json();
              const {email,password} = z.object({email:z.string(),password:z.string()}).parse(body);
              return NextResponse.json({message:"working",data:{email,password}})
         } catch (error) {
            return NextResponse.json({error:error})
         }
}