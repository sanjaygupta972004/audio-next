import dbConnected from "@/lib/dbConnect";
import { NextRequest,NextResponse } from "next/server";
import { Message } from "@/models/contact.model";
import { User } from "@/models/user.model";

export  async function POST(req:NextRequest){
     const {username,email,phone ,message} = await req.json()
     
     try {
         await dbConnected()
         if(!username || !email || !phone || !message){
                return NextResponse.json({
                        message:" All fields required ",
                        status: 400
                })
         }

         const user = await User.findOne({email})
         if(!user){
                return NextResponse.json({
                        message:" User does not exit",
                        status:400
                })
         }
        const res =  await Message.create({
                username:username,
                email:email,
                phoneNumber:phone,
                message:message
        })

        if(!res){
                return NextResponse.json({
                        message:"Something went wrong while creating message",
                        status:500
                })
        }
        return NextResponse.json({
                data:res,
                message:" Message is  successfully sent"
        })
        
        
     } catch (error) {
          return NextResponse.json({
                message:`error from :${(error as Error).message}`
          })
     }
}