const mongoose = require('mongoose');

const connectDB= async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/restAPI')
        console.log('MongoDB connected...');
    } catch (error) {
        
    }
}

module.exports=connectDB;