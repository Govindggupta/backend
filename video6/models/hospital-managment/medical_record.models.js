import mongoose from "mongoose"

const medicalRecordSchema = new mongoose.Schema({}, {timestamps: true});

export const MedicalaRecord = mongoose.model('MedicalRecord' , medicalRecordSchema);