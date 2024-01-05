
import otpGenerator from "otp-generator"
import jwt from "jsonwebtoken"
import { TokenDataType } from "../../type"

export const matchPassword = async (receivedpass: string, recordPass: string) => {
    const isMatching = receivedpass == recordPass
    return isMatching
}

export const generateOtp = () => {
    const otp = otpGenerator.generate(4, { digits: true, lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false })
    return otp
}

export const generateAccessToken = (data: TokenDataType) => {
    const accessToken = jwt.sign(
        {
            "UserInfo": {
                "email": data.email,
                "company": data.companyName
            }
        },
        process.env.ACCESS_TOKEN_SECRET as string,
        { expiresIn:"30min" }
    );
    return accessToken;
};

export const generateRefreshToken = (data: TokenDataType) => {
    const accessToken = jwt.sign(
        {
            "UserInfo": {
                "email": data.email,
                "company": data.companyName
            }
        },
        process.env.ACCESS_TOKEN_SECRET as string,
        { expiresIn: "5days" }
    );

    return accessToken;
};