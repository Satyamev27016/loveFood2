import mongoose,{Schema} from 'mongoose';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema  = new Schema({

    username:{
        type : String,
        required : true,
        uniquee : true,
        lowercase : true,
        trim : true,
        index : true
    },
    email:{
        type : String,
        required : true,
        uniquee : true,
        lowercase : true,
        trim : true
    },
    fullName:{
        type : String,
        required : true,
        trim : true,
        index : true
    },
    password:{
        type : String,
        required : [true, "Password is required"]
    },
    freshToken:{
        type : String
    },
})