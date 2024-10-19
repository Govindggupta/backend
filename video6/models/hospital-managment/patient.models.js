import mongoose from "mongoose"

const patientSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    diagnosedWith: {
        type: String, 
        required: true 
    },
    age: {
        type: Number, 
        required: true 
    },
    bloodGroup: {
        type: String, 
        required: true 
    }, 
    gender: {
        type: String, 
        enum: ['m','f','o'],  
        required: true
    }, 
    addimitedIn : {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Hospital"
    }
}, {timestamps: true});

export const Patient = mongoose.model('Patient' , patientSchema);