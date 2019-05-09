const mongoose=require('mongoose');
const Joi=require('joi');
const {Schema}=mongoose;

const commentSchema= new Schema({
    content:{
        type:String,
        minlength:50,
        maxlength:180,
        required:true,
    },
    dateComment:{
        type:Date,
        default:Date.now
    }
   
})

function validateComment(comment) {
    const schema = {
        content: Joi.string().min(50).max(180).required()
    };
  
    return Joi.validate(comment, schema);
  }

  exports.commentSchema=commentSchema;
  exports.validate = validateComment;