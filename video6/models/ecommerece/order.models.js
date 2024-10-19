import mongoose from "mongoose";
import { Product } from "./product.models";

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true,
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderItems: {
        type: [orderItemSchema]
    }, // to take entry in array you can define it by making small schema like this or can directly write inside it 

    address: {
        type: String, 
        required: true
    },
    status: {
        type: String, 
        enum : ["PENDING", "CANCELLED", "DILIVERED"], // this is used to give option that from this only can be taken 
        default: "PENDING"
    }
    
}, { timestamps: true })

export const Order = mongoose.model("Order", orderSchema)  
     