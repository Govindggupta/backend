import mongoose, { Types } from "mongoose"

const userSchema = new mongoose.Schema({
    username : {
        type : String, 
        required : true, 
        unique : true , 
        lowercase: true, 
    }, 
    email:{
        type: String, 
        required : true , 
        unique: true, 
        lowercase: true, 

    }, 
    password: {
        type : String, 
        required: [true, "password is required"]
    }
}, {timestamps: true})

export const User = mongoose.model('User', userSchema)

// jab ye data mongoDB me jata hai to "User" ka "users" ho jat hai 
