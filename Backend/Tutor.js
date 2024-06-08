const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const tutorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rollno:{type:String, required:true, unique:true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  });
  
  tutorSchema.pre('save', async function (next) {
    const salt = await bcryptjs.genSalt(10);
    this.password = await bcryptjs.hash(this.password, salt);
    next();
  });
  
  const Tutor = mongoose.model('Tutor', tutorSchema);
  module.exports = Tutor;