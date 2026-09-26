import mongoose from "mongoose";
import uuidv1 from "uuidv1";
import crypto from "crypto";

const authSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },

    password: {
      type: String,
      required: true,
      minlength: 6
    },

    role: {
      type: Number,
      default: 0
    },

    hashed_password: {
        type: String,
        required: true
    },

    salt: String,
    isVerified: {
        type: Boolean,
        default: false
    }
  },
  {
    timestamps: true
  }
);

// virtual fields
authSchema.virtual('password')
.set(function(password){
    this._password = password
    this.salt = uuidv1()
    this.hashed_password = this.encryptPassword(password) //encryptPassword is not pre-defined, we will define later
})
.get(function(){
    return this._password = password
})

// defining methods
authSchema.methods = {
    encryptPassword: function(password){
        if(!password) return ''

        try{

        }catch(err){
            return ''
        }
    }
}


const Auth = mongoose.model("Auth", authSchema);

export default Auth;

