import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers"
import jwt from "jsonwebtoken"

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const refreshtoken = cookies()
        const token = refreshtoken.get("jwt")!.value
        jwt.verify(
            token,
            process.env.REFRESH_TOKEN_SECRET as string,
            async (err, decoded) => {
                if (err) {
                    return NextResponse.json({
                        messege: err
                    }, { status: 403 })
                }
            }
        )
        return NextResponse.json({
            messege: "found"
        }, { status: 403 })
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            message: "Internal Server Error",
            status: 500
        });
    }
} 