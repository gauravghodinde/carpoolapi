import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const dbConnect = async () =>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        // console.log(`MongoDB connected !!DB Host ${connectionInstance.connection.host}`)
    }catch(error){
        console.log("mongoose connection failed: ", error)
        process.exit(1);
    }
}
export default dbConnect; 