import mongoose from "mongoose"

const hospitalSchema = new mongoose.Schema({
    name, addressLine1, addressLine2, city , pincode , specializedIn : [{type: String}]
}, {timestamps: true});

export const Hospital = mongoose.model('Hospital' , hospitalSchema);
