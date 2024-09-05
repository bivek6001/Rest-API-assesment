const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
      
    },
    
     email:{
            type:String,
            required:true,
            unique:true
        },
     phone:{
            type:Number,
            required:true,
            unique:true
        },
        status:{
            type:String,
            enum:['active', 'inactive'],
            default:"inactive"
        },
    
    department:{
        type:String,
        // required:true
        default:"web developer"
    },
    startDate:{
        type:Date,
        required:true,
        default:  Date.now()
    
    },
    endDate:{
        type:Date,
     
    },
    role:{
        type:String,
        enum:['admin', "intern", 'manager'],
        default:"intern"
    },
    tasks:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "task"
    }]

    
})


const User= mongoose.model("user",userSchema);

module.exports=User;