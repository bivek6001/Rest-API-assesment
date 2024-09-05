const Task= require("../models/task-model.js");
const User= require("../models/user-model.js");




const createTask= async (req, res)=>{

    try {
       
        const {title,description}=req.body;
        
        if(!title ||!description ){
            return res.status(400).json({message:"task title or description field is missing", success:false});
        }
        

        const newTask=await Task.create({title,description});
        return res.status(200).json({newTask:newTask});
       
        
    } catch (error) {
        return res.status(500).json({message:error.message,success:false});
    }
}

const assignmentofTask = async(req, res)=>{
    try {
       const taskId=req.params.id;
       const { internId}=req.body;
  
        const user= await User.findOne({_id:internId});
        console.log(user)
        if(!user){
            return res.status(404).json({message:"Intern not found", success:false});
        }

        if(user.tasks.includes(taskId)){
            return res.status(400).json({message:"Task is already assigned to this intern", success:false});
        }

        user.tasks.push(taskId);

        await user.save();

        return res.status(200).json({message:"Task assigned successfully", success:true});
        
      
       
        
    } catch (error) {
        return res.status(500).json({message:error.message,success:false});
    }

}
const findTask= async (req, res)=>{
    try {

        const internId= req.params.id;
        const tasks= await User.findById(internId).select("tasks").populate("tasks");
        return res.json({tasks:tasks.tasks});
        // const task= await Task.findById(req.params.id).populate("assignedIntern");
        
      
        
    } catch (error) {
        return res.status(500).json({message:error.message,success:false});
    }
}


const updateTask= async (req, res)=>{
    
        try {
            const taskId= req.params.id;
           
            const {title,description,status,dueDate,priority}=req.body;
            const updateFields = {};
            if (title) updateFields.title = title;
            if (description) updateFields.description = description;
            if (dueDate) updateFields.dueDate = dueDate;
            if (priority) updateFields.priority = priority;
            if (status) updateFields.status = status;
            
            const updatedTask= await Task.findByIdAndUpdate({_id:taskId},updateFields,{new:true});
    
            return res.status(200).json({success:true,message:"updated successfully",updatedTask})

        } catch (error) {
            return res.status(500).json({message:error.message,success:false});
        }
        
    
    
    
    }
    
const deleteTask= async (req, res)=>{
        try {
            const taskId= req.params.id;
            const { internId}=req.body;

            const user= await User.findOne({_id:internId});
            if(!user){
                return res.status(404).json({message:"Intern not found", success:false});
            }
           
           
            const task =await Task.findByIdAndDelete(taskId);
            if(!task){
                return res.status(404).json({message:"Task not found", success:false});
            }
            const taskExist= user.tasks.includes(task._id)
            console.log(taskExist);
            if(taskExist){
                user.tasks=user.tasks.filter(id=>id!=taskId);
                await user.save();
            }
            console.log(task)
           

            return res.status(200).json({message:"Task deleted successfully", success:true});
        } catch (error) {
            return res.status(500).json({message:error.message,success:false});
        }
    }
    
 
    module.exports ={createTask, updateTask,deleteTask,findTask,assignmentofTask }


