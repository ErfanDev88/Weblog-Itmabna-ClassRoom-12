import mongoose from "mongoose";
import config from "config";

export default async function ConnectToDb() {
  try {
    await mongoose.connect(config.get("database.address"));
    console.log("App Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}
