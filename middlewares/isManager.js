const jwt= require("jsonwebtoken");
const User= require("../models/user-model.js")
const isManager=async (req,res,next) => {



    try {
        // console.log("wrordj")
        const token= req.cookies.token;
        // res.send("vetydfjsdjf").
        // console.log(token);
        if(!token){
            return res.status(401).json({message:"Unauthorized", success:false})
        }
        const decode= await jwt.verify(token,process.env.JWT_SECRET);
        
       if(decode){
            const id= decode.id
            const user= await User.findById(id);
            if(user.role==="manager"){
                req.id= id
                next();

            }
            else{
                return res.status(403).json({message:"You are not authorized to access this resource", success:false})
            }

        }
            
 } catch (error) {
        return res.status(500).json({message: error.message,success:false});
    }
    
}
module.exports= isManager;