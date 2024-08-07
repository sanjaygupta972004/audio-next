import mongoose,{Schema,Model,Document} from "mongoose";

interface IContact extends Document{
   username:string,
   email:string,
   phoneNumber:string,
   message:string     
}

const messageSchema :Schema = new Schema({
   username:{
      type:String,
      required: true,
      maxlength:[100 ,"username should be maximum length 100 "]

   },
   email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true,
      match: [
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please provide a valid email address',
      ],
    },
    phoneNumber:{
      type:Number,
      required:true
    },
    message:{
      type:String,
      required:true,
      trim:true
    }

},{timestamps:true})

export const Message:Model<IContact> = mongoose.models.Message || mongoose.model<IContact>("Message",messageSchema)