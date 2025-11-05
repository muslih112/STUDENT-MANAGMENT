import mongoose from "mongoose";

export const connDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connection Successful");
  } catch (err) {
    console.log("can not connect to server", err);
  }
};
