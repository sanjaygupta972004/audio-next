// import dbConnected from "@/lib/dbConnect";
// import { User } from "@/models/user.model";
// import { NextRequest,NextResponse } from "next/server";

// export  async function POST(req:NextRequest){
//      const {username,email,phone ,message} = await req.json()
     
//      try {
//          await dbConnected()
//          if(!username || !email || !phone || !message){
//                 return NextResponse.json({
//                         message:" All fields required ",
//                         status: 400
//                 })
//          }

//          const user = await User.findOne(email)
//          if(!user){
//                 return NextResponse.json({
//                         message:" User does not exit",
//                         status:400
//                 })
//          }
        
        
//      } catch (error) {
        
//      }
// }