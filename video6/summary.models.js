// so this is what we have learn from video Number 5 and 6 as far now 

import mongoose, { mongo } from "mongoose";

const newDataSchema = new mongoose.Schema({

}, {timestamps: true })
// here time stamps means ki createdAt and updatedAt feilds bhi dedo 

export const newData = mongoose.model("newData", newDataSchema); 


// here jo nam export k samay const ko diya hai vo hi nam ander "" me dena hai so that we can give refrences nicely 

// and second important point is ki jo "newData" hai vo mongo me jake lowecase ho jayega and plural form me ho jayega i.e, newData --> newdatas ho jayega . Iska nam aaisa ho jayega , ohk ?? did you understand 