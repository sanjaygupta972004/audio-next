import mongoose from "mongoose";
import { devNull } from "os";

type dbConnection = {
        isConnected ?:number
}

const connection : dbConnection = {}

 async function dbConnected():Promise<void> {
   if(connection.isConnected){
        console.log("Already database connected ")
        return 
   }
   try {
        
    

   const db = await mongoose.connect(process.env.MONGOOSE_URI || "", )
    console.log("database connected")
    connection.isConnected = db.connections[0].readyState
   } catch (error) {
        console.log("db is not connected",error)
        process.exit(1)
   }
}

export default dbConnected