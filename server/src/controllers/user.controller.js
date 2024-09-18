import {asyncHandler} from "../utils/asyncHandler.js";
import ApiError from "../utils/apiError.js";
import {User} from "../models/user.model.js";
import { ApiResponse } from "../utils/apiResponse.js";


const generateAccessAndRefreshToken = async(userId) => {
    try{
        const user = await User.finfById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()
        
        user.refreshToken = refreshToken
        await user.save({ validationBeforeSave: false})
        return {accessToken, refreshToken}
    } catch(error){
        throw new ApiError(500, "Token generation failed", error)
    }
}

const registerUser = asyncHandler(async(req, res, next)=>{
    // email validate
    function isValidation(email){
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const {email, password, fullName, username} = req.body;
    // console.log("email : ", email);

    if([fullName, email, password, username ].some((field) => field?.trim() === "")
    ){
        return next(new ApiError(400, "All fields are required"))
    }

    if(!isValidation(email)){
        return next(new ApiError(400, "Invalid email"))
    }

    // check if user already exists

    const existedUser = await User.findOne({
        $or: [{email}, {username}]
    })

    if(existedUser){
        return next(new ApiError(409, "User already exists"))
    }
    console.log("req.files : ", req.files);

    // create new user in database

    const user = await User.create({
        email,
        password,
        fullName,
        username : username.toLowerCase(),
        
    })

    const createdUser = await User.findById(user._id).select("-password -refreshToken")
    
    if(!createdUser){
        throw new ApiError(500, "User not created")
    }

    return res.status(201).json(
        new ApiResponse(201, createdUser, "User created successfully")
    )
})

export {registerUser};