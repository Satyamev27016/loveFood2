import ApiError from "../utils/apiError";
import { asyncHandler } from "../utils/asyncHandler";
import jwt from "jsonwebtoken"

export const verifyJWT = asyncHandler(async(req, res, next) => {
    try {
        const accessToken = req.cookies?.accessToken || req.header("authorization")?.replace("Bearer","")

        if(!accessToken){
            throw new ApiError(401, " unauthorized request ")
        }

        const decodedToken = jwt.verify(accessToken, process.env.REFRESH_TOKEN_SECRET)

        const user = await user.findById(decodedToken?._id).select("-password -refreshToken")
        
        if(!user){
            throw new ApiError(401, "invalid Access Token")
        }

    }catch (error){
        throw new ApiError(401, " something went wrong")
    }
})