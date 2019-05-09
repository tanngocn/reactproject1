const mongoose=require('mongoose');
const Joi=require('joi');
const {Schema}=mongoose;

const materialSchema= new Schema({
    name:{
        type:String,
        minlength:1,
        maxlength:40,
        required:true,
        trim:true
    }
   
})
const Material=mongoose.model('Materials',materialSchema);

function validateMaterial(material) {
    const schema = {
        name: Joi.string().min(1).max(40).required()
    };
  
    return Joi.validate(material, schema);
  }
  exports.materialSchema=materialSchema;
  exports.Material = Material; 
  exports.validate = validateMaterial;