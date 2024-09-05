const mongoose = require('mongoose');
const { Schema } = mongoose;

const feedbackSchema = new Schema({
  internId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  managerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  feedbackText: {
    type: String,
    required: true,
    maxlength: 1000
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  }
},{timestamps:true});

const Feedback= mongoose.model('Feedback',feedbackSchema )

module.exports=Feedback;
