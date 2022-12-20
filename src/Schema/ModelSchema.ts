import {Schema}  from "mongoose";
import { Password } from "../services/Password";

interface UserI {
  email: string;
  password: string;
  username: string;
}

const userSchema = new Schema<UserI>({
  email:{
    type: String,
    required: true,
    unique: true,
  },
  password:{
    type: String,
    required: true
  },
  username:{
    type: String,
    required: true
  }
},
{ 
  timestamps:true,
  toJSON:{
    transform(doc, ret) {
      ret.id = ret._id
      delete ret._id
      delete ret.__v
      delete ret.password;
    },
  }

}
)

userSchema.pre('save', async function(){
   if(this.isModified('password')){
    const hash = await Password.toHash(this.get('password'));
    this.set('password', hash);
   }
})


//export schema and interface and what
export { userSchema, UserI};
