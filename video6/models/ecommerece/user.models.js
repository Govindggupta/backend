import mongoose, { Types } from "mongoose"

const userSchema = new mongoose.Schema({

    username: {
        Types: String, 
        lowercase: true, 
        unique: true,
        required: true
    },
    email: {
        Types: String, 
        lowercase: true, 
        unique: true,
        required: true

    },
    password: {
        Types: String, 
        required: true,
        unique: true
    }

}, {timestamps: true});

export const User = mongoose.model("User", userSchema)