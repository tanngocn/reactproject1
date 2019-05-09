const mongoose=require('mongoose');
const Joi=require('joi');
const {materialSchema}=require('./Material');
const {kindProductSchema}=require('./KindProduct')
const {Schema}=mongoose;

const productSchema= new Schema({
    nameProduct:{
        type:String,
        minlength:20,
        maxlength:100,
        required:true,
        trim:true
    },
    priceProduct:{
        type:Number,
        min:10,
        max:1000,
        required:true,
    },
    qualityProduct:{
        type:Number,
        min:0,
        max:200,
        required:true,
    },
    imgProduct:{
        type:String,
        required:true
    },
    kindProduct:{
        type:kindProductSchema,
        required:true
    },
    material:{
        type:materialSchema,
        required:true
    },
    description:{
        type:String,
        minlength:5,
        maxlength:255,
        required:true,
    },
    dateCreate:{
        type:Date,
        default: Date.now
    },
    oneStar:{
        type:Number,
        default:0
    },
    twoStar:{
        type:Number,
        default:0
    },
    threeStar:{
        type:Number,
        default:0
    },
    fourStar:{
        type:Number,
        default:0
    },
    fiveStar:{
        type:Number,
        default:0
    }
    
})
const Product=mongoose.model('Products',productSchema);

function validateProduct(product) {
    const schema = {
        nameProduct: Joi.string().min(15).max(100).required(),
        priceProduct: Joi.number().min(10).max(1000).required(),
        qualityProduct: Joi.number().min(0).max(200).required(),
        description: Joi.string().min(5).max(255).required(),
        kindProductId:Joi.objectId().required(),
        materialId:Joi.objectId().required()
    };
  
    return Joi.validate(product, schema);
  }
  exports.productSchema=productSchema;
  exports.Product = Product; 
  exports.validate = validateProduct;