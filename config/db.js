import mongoose from "mongoose";
const connectToMongo = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO);
    console.log(`Mongo Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Mongo Error: ${error}`);
  }
};

export default connectToMongo;
