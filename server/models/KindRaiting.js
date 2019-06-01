const mongoose=require('mongoose');
const Joi=require('joi');
const {Schema}=mongoose;

const kindRaitingSchema= new Schema({
    name:{
        type:String,
        minlength:3,
        maxlength:40,
        required:true,
    }
   
})

const KindRaiting=mongoose.model('KindRaiting', kindRaitingSchema);

function validateKindRaiting(kindRaiting) {
    const schema = {
        name: Joi.string().min(1).max(40).required()
    };
  
    return Joi.validate(kindRaiting, schema);
  }
  exports.kindRaitingSchema=kindRaitingSchema;
  exports.KindRaiting = KindRaiting; 
  exports.validate = validateKindRaiting;