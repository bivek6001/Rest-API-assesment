const Feedback =require("../models/feedback-model.js");


const createFeedback= async(req,res)=>{
    try {
        console.log("Creating Feedback");
        const managerId=req.id;
        const internId= req.params.id;
        const {feedbackText,rating}=req.body;
        if(!feedbackText || !rating){
            return res.status(400).json({message:"All fields are required",success:false});
        }
        const newFeedback = await Feedback.create({
            managerId,
            internId,
            feedbackText,
            rating
        })
        return res.status(200).json({
        message:"Feedback created successfully",
        success:true,
        feedback:newFeedback
        })


    } catch (error) {
        return res.status(500).json({message:error.message,success:false});
        
    }
}

const readFeedback= async(req,res)=>{
    try {


        const internId= req.params.id;
        const feedbacks= await Feedback.find({internId});

        if(!feedbacks){
            return res.status(404).json({message:"No feedback found for this intern",success:false});
        }

        return res.status(200).json({
        message:"Feedback retrieved successfully",
        success:true,
        feedbacks
        })
        
    } catch (error) {
        return res.status(500).json({message:error.message,success:false});
        
    }
}

const updateFeedback= async(req,res)=>{
    try {
        const feedbackId= req.params.id;
        const {feedbackText,rating}=req.body;

        const feedback= await Feedback.findById(feedbackId);
        if(!feedback){
            return res.status(404).json({message:"Feedback not found",success:false});
        }
        const updateFields = {};
        if (feedbackText) updateFields.feedbackText = feedbackText;
  
        if (rating) updateFields.rating = rating;
        
        const updatedFeedback= await Feedback.findByIdAndUpdate({_id:feedbackId},updateFields,{new:true});

        return res.status(200).json({
        message:"Feedback updated successfully",
        success:true,
        feedback:updatedFeedback
        })
        

    } catch (error) {
        return res.status(500).json({message:error.message,success:false});
        
    }
}

const deleteFeedback= async(req,res)=>{
    try {
        const feedbackId= req.params.id;

        const feedback =await Feedback.findByIdAndDelete(feedbackId,{new:true});
        if(!feedback){
            return res.status(404).json({message:"Feedback not found", success:false});
        }
        return res.status(200).json({message:"Feedback deleted",success:true});
    } catch (error) {
        return res.status(500).json({message:error.message,success:false});
        
    }
}

module.exports={createFeedback, deleteFeedback,updateFeedback,readFeedback};