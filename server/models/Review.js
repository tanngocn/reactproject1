const Joi=require('joi');
const mongoose=require('mongoose');

const {Schema}=mongoose; 

const reviewSchema=new Schema({
    content:{
        type:String,
        minlength:40,
        maxlength:255,
        required:true,
        trim:true
    },
    dateReview:{
        type:Date,
        default: Date.now
    },
    user:{
        type:new Schema({
            username:{type:String, required:true}
        }),
        required:true
    },
    product:{
        type:new Schema({
            nameProduct:{type:String, required:true}
         }),
        required:true
    },
    kindRaiting:{
        type: new Schema({
            name:{type:String, required:true}
        }),
        required:true
    }
})
const Review= mongoose.model("Review", reviewSchema);

function validateReView(review) {
    const schema = {
        content: Joi.string().min(40).max(255).required(),
        userId:Joi.objectId().required(),
        productId:Joi.objectId().required(),
        kindRaitingId:Joi.objectId().required()
    };
    return Joi.validate(review, schema);
  }
  exports.Review = Review; 
  exports.validate = validateReView;