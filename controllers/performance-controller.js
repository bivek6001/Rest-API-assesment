const Performance =require("../models/performance-model.js");


const createPerformance= async(req,res)=>{
    try {
      
        const reviewer=req.id;
        const internId= req.params.id;
        const {comments}=req.body;
        if(!comments){
            return res.status(400).json({message:"comment is required",success:false});
        }
        const newPerformance = await Performance.create({
           reviewer,
            internId,
          comments 
          
        })
        return res.status(200).json({
        message:"Performance created successfully",
        success:true,
        Performance:newPerformance
        })


    } catch (error) {
        return res.status(500).json({message:error.message,success:false});
        
    }
}

const readPerformance= async(req,res)=>{
    try {


        const internId= req.params.id;
        const Performances= await Performance.find({internId});

        if(!Performances){
            return res.status(404).json({message:"No Performance found for this intern",success:false});
        }

        return res.status(200).json({
        message:"Performance retrieved successfully",
        success:true,
        Performances
        })
        
    } catch (error) {
        return res.status(500).json({message:error.message,success:false});
        
    }
}

const updatePerformance= async(req,res)=>{
    try {
        const PerformanceId= req.params.id;
        const {comments}=req.body;

        const performance= await Performance.findById(PerformanceId);
        if(!performance){
            return res.status(404).json({message:"Performance not found",success:false});
        }
        const updateFields = {};
        if (comments) updateFields.comments = comments;
  
       
        
        const updatedPerformance= await Performance.findByIdAndUpdate({_id:PerformanceId},updateFields,{new:true});

        return res.status(200).json({
        message:"Performance updated successfully",
        success:true,
        Performance:updatedPerformance
        })
        

    } catch (error) {
        return res.status(500).json({message:error.message,success:false});
        
    }
}

const deletePerformance= async(req,res)=>{
    try {
        const PerformanceId= req.params.id;

        const performance =await Performance.findByIdAndDelete(PerformanceId,{new:true});
        if(!performance){
            return res.status(404).json({message:"Performance not found", success:false});
        }
        return res.status(200).json({message:"Performance deleted",success:true});
    } catch (error) {
        return res.status(500).json({message:error.message,success:false});
        
    }
}

module.exports={createPerformance, deletePerformance,updatePerformance,readPerformance};