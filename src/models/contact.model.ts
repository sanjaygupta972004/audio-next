import mongoose,{Schema,Model,Document} from "mongoose";

interface IContact extends Document{
   username:string,
   email:string,
   phoneNumber:string,
   message:string     
}

const messageSchema :Schema = new Schema({

},{timestamps:true})

export const Message:Model<IContact> = mongoose.models.Message || mongoose.model<IContact>("Message",messageSchema)