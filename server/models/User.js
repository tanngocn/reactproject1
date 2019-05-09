const  jwt= require('jsonwebtoken');
const mongoose=require('mongoose');
const {Schema}=mongoose;
const Joi=require('joi');
const {commentSchema}=require('./Comment');



const userSchema= new Schema({
    username:{
        type:String,
        minlength:5,
        maxlength:30,
        required:true,
        trim:true
    },
    email:{
        type:String,
        minlength:10,
        maxlength:30,
        required:true,
        trim:true
    },
    password:{
        type:String,
        minlength:5,
        maxlength:250,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    comment:{
        type:[commentSchema],
    },
    dateCreate:{
        type:Date,
        default: Date.now
    }
    
})
//method
userSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id, isAdmin: this.isAdmin, username:this.username },'jwtPrivateKey');
    return token;
  }

const User=mongoose.model('User',userSchema);

function validateUser(user) {
    const schema = {
    username: Joi.string().min(5).max(30).required(),
      email:Joi.string().min(10).required(50).required().email(),
      password:Joi.string().min(5).max(250).required()
    };
  
    return Joi.validate(user, schema);
  }
  exports.userSchema=userSchema;
  exports.User = User; 
  exports.validate = validateUser;