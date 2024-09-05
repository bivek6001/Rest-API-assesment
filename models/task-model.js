const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TaskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    assignedIntern: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'intern',
       
    },
    dueDate:{
        type: Date,
        // required: true,
    },
    status: {
        type: String,
        enum: ['Pending', 'In Progress', 'Completed', 'Overdue'],
        default: 'Pending',
    },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        default: 'Medium',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    
},{timestamps: true});

const Task= mongoose.model('task',TaskSchema);
module.exports = Task;