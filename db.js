const mongoose = require('mongoose');

const connectDB= async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB connected...');
    } catch (error) {
        
    }
}

module.exports=connectDB;