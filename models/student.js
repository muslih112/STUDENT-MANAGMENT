// models/student.js
import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

export const Student =
  mongoose.models.student || mongoose.model("student", studentSchema);
