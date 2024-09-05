const bcrypt= require("bcryptjs");
const jwt= require('jsonwebtoken');
const User= require("../models/user-model.js");






const registerUser= async (req, res) => {
    try{
        const {name,email,phone,password,role,department}=req.body;
        if(!name || !email || !phone || !password || !role || !department){
            return res.status(400).json({message:"All fields are required", success:false});
        }
        const user= await User.findOne({email:email});
        if(user){
            return res.status(400).json({message:"User already exists", success:false});
        }

        const salt= await bcrypt.genSalt(10)
        const hashedPassword= await bcrypt.hash(password, salt);
        // console.log(salt)
        const newUser= await User.create({name,email,phone,password:hashedPassword,role,department});
        // res.send(hashedPassword)
        return res.status(200).json({message:"user successfully created",success:true,newUser});
        // res.send("gi")



    }
    catch(err){
        res.status(500).json({message:err.message,success:false});
    }
}
const loginUser= async (req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email ||!password){
            return res.status(400).json({message:"Email and password are required", success:false});
        }
        const user= await User.findOne({email:email});
        if(!user){
            return res.status(401).json({message:"user not found", success:false})
        }
        const isMatch= await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({message:"Invalid credentials", success:false})
        }
        const token= jwt.sign({id:user._id},process.env.JWT_SECRET)
        console.log(token)

        return res.cookie("token",token,{
            httpOnly: true,
            expires: new Date(Date.now() + 60 * 60 * 1000),
            secure: true
            
        }).json({success:true,message:"login successful"})

        
    } catch (error) {
        res.status(500).json({message:err.message,success:false});   
    }



}











const findIntern= async (req, res) => {
    try{
        const internId= req.params.id;

        const exist= await User.findOne({_id:internId});
     
        const {department,status}=req.query;

        console.log(department)
        if(department && status){
          const intern= await User.findOne({department:department,status:status});

        }
        if(department){    const intern= await User.findOne({department:department});
        return res.status(200).json({message:"intern found successfully", success:true, intern});}
        if(status){
            const intern= await User.findOne({status:status})
            return res.status(200).json({message:"intern found successfully", success:true, intern})
        }
       

         
        

        

    }
    catch(err){
        res.status(500).json({message:err.message,success:false});
    }
}


const updateIntern= async (req, res) => {
    try{
        const internId = req.params.id; // Assuming the intern ID is passed in the URL
        const {name,email,phone,status,department}= req.body;
        
      
        
       
       
        const updateFields = {};
        if (name) updateFields.name = name;
        if (email) updateFields.email = email;
        if (phone) updateFields.phone = phone;
        if (status) updateFields.status = status;
        if (department) updateFields.department = department;
        const intern= await User.findByIdAndUpdate({_id:internId},updateFields,{new:true});



        res.status(200).json({ message: "Intern updated successfully", success: true, intern});

        


    }
    catch(err){
        res.status(500).json({message:err.message,success:false});
    }
}



const deleteIntern= async (req, res) => {
    try{
        const id= req.params.id;
        const intern= await User.findByIdAndDelete(id);
        if(!intern){
            return res.status(404).json({message:"Intern not found", success:false});
        }
        return res.json({message:"Intern deleted successfully", success:true});
    }
    catch(err){
        res.status(500).json({message:err.message,success:false});
    }
}

module.exports= {registerUser,loginUser,findIntern,deleteIntern,updateIntern};