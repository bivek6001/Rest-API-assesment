const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PerformanceSchema = new Schema({
    internId: {
        type: Schema.Types.ObjectId,
        ref: 'user', 
        required: true
    },
    reviewDate: {
        type: Date,
        default: Date.now
    },
   
    comments: {
        type: String,
        trim: true
    },
    reviewer: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
}, { timestamps: true });

const Performance = mongoose.model('performance', PerformanceSchema);

module.exports = Performance;
