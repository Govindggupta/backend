import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name, salary, qualification, exprencesInYears, 
    workInHospitals: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Hospital'
        }
    ],  // to take input in array you can take like it or can small schema and use it here insted of writing
}, {timestamps: true})

export const Doctor = mongoose.model('Doctor', doctorSchema);