const Joi=require('joi');
const mongoose=require('mongoose');
const {userSchema}= require('./User');

const {Schema}=mongoose; 

const cartSchema = new Schema({
    dateCreate:{
        type:Date,
        default: Date.now
    },
    user:{
        type:userSchema,
        required:true
    },
    product: [{
        _id:{
            type:String,
            required:true
        },
        nameProduct:{
            type:String,
            required:true
        },
        qualitySell:{
            type:Number,
            default:0
        }
    }]
 
})
const Cart= mongoose.model('Carts',cartSchema);

function validateCart(cart) {
    const schema = {
        userId:Joi.objectId().required(),
        productId:Joi.array().required(),
    };
  
    return Joi.validate(cart, schema);
  }
  exports.cartSchema=cartSchema;
  exports.Cart = Cart; 
  exports.validate = validateCart;