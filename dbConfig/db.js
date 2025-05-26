import mongoose from "mongoose";

const connectDB = async() => {
  try {
    const url = "mongodb://localhost:27017/practicedb";
    const conn = await mongoose.connect(url);
    console.log("database successfully connected");
  } catch (err) {
    console.log("database connection failed!");
  }
};

export default connectDB;
