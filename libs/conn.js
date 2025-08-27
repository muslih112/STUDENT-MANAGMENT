import mongoose from "mongoose";

export default async function connDb() {
  try {
    await mongoose.connect(
      "mongodb+srv://muslihmuhammad112:Fgw9NOxENp1mIGRe@students.ljjibuu.mongodb.net/?retryWrites=true&w=majority&appName=students",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected successfully!");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}
