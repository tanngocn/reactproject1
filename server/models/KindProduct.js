const mongoose=require('mongoose');
const Joi=require('joi');
const {Schema}=mongoose;

const kindProductSchema= new Schema({
    name:{
        type:String,
        minlength:4,
        maxlength:40,
        required:true,
        trim:true
    }
   
})
const KindProduct=mongoose.model('KindProduct',kindProductSchema);

function validateKindProduct(kindProduct) {
    const schema = {
        name: Joi.string().min(4).max(40).required()
    };
  
    return Joi.validate(kindProduct, schema);
  }
  exports.kindProductSchema=kindProductSchema;
  exports.KindProduct = KindProduct; 
  exports.validate = validateKindProduct;