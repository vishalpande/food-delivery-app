import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://pandevishal40:vishal@food-delivery-app.vvvn5.mongodb.net/?retryWrites=true&w=majority&appName=Food-Delivery-App').then(()=>{
       console.log('DB connected') ;
    })
}