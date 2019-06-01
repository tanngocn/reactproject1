const mongoose = require('mongoose');
const express = require('express');
const {User} = require('./../models/User');
const {Product} =require('./../models/Product');
const {KindRaiting}= require('./../models/KindRaiting');
// 
const _ = require('lodash');
const checkReview= require('./../middlewares/checkReview');
const {Review, validate} = require('./../models/Review');
const router= express.Router();


router.get('/', async(req, res)=>{
    const review = await Review.find().sort('-createDate');
    if(!review) return res.status(400).send('Bad request, No review ');
    res.send(review);

})
//Thongke
router.get('/count',async (req, res)=>{
    const count = await Review.aggregate([
        {"$group":
            {
                "_id":{
                   "product": "$product",
                    "kindRaiting": "$kindRaiting"
                },
                countProductRaiting: {$sum: 1}
            }
        }

    ]);
    res.send(count)
})
//get review product
router.get('/:id',async(req, res)=>{
    const review= await Review.find({"product._id":req.params.id});
    if(!review) res.status(400).send("No review list with productId");
    res.send(review);
})
//checkauth
router.post('/' , checkReview, async(req, res)=>{
    // check loi du lieu
    const {error}= validate(req.body);
    if(error ) return res.status(400).send(error.details[0].message)
    // check nguoi dung 
    const user = await User.findById(req.body.userId);
    if(!user) return res.status(400).send('Can\'t find user with Id ');
    // check  kind Raiting
    const kindRaiting= await KindRaiting.findById(req.body.kindRaitingId);
    if(!kindRaiting) return  res.status(400).send('Can\'t  find Raiting with Id');
    // check proproduct
    const product=await Product.findById(req.body.productId);
    if(!product) return res.status(400).send('Can\'t find product with Id');
    
    const review= new Review({
        content:req.body.content,
        user:{
            _id:user._id,
            username:user.username
        },
        kindRaiting:{
            _id:kindRaiting._id,
            name:kindRaiting.name
        },
        product:{
            _id:product._id,
            nameProduct:product.nameProduct,

        }
    })
    try{
       await review.save();
        res.send(review);
    }
    catch(ex){
        res.status(500).send(ex);
    }
   


} )
module.exports=router;
