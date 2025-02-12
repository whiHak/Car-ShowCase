import { model, models, Schema } from "mongoose";

export interface IUser extends Document {
    _id: string;
    clerkId: string
    email: string
    username:string
    firstName:string
    lastName:string
    phoneNumber:string
    photo:string
  }
  
const UserSchema = new Schema({
    clerkId:{type: String, required:true, unique:true },
    email:{type:String, required: true, unique:true },
    username: {type: String, required:true, unique:true},
    firstName:{type:String, required:true},
    lastName: {type: String, required:true},
    phoneNumber:{type:String, requied:true},
    photo: {type:String, required:true},
})

const User = models.User || model("User", UserSchema);
export default User