const mongoose = require('mongoose');
const express = require('express');
const {Product} = require('./../models/Product');
const {User} = require('./../models/User');
const Fawn= require('fawn');
// const auth= require('./../middlewares/auth');
const {Cart, validate} = require('./../models/Cart');
//router
const router= express.Router();
Fawn.init(mongoose);
router.post('/', async(req, res)=>{
    const {error}= validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    // check user
    const user= await User.findById(req.body.userId);
    if(!user) return res.status(400).send("User with Id was not found");
    // Check Product
    let {productId}=req.body;
    let id=[];
   productId.map(value=>{
        id.push(value._id);
       
    })
    const products= await Product.find({_id: {$in : id } 
    });
    if(!products) return res.status(400).send("Product with Id was not found"); 

    const cart= new Cart({
        product: productId.map(product=>({
            _id:product._id,
            nameProduct:product.nameProduct,
            qualitySell:product.qualitySell
        })),
        user:{
            _id:user._id,
            username: user.username
        }
    })

    try{
        
        new Fawn.Task().save('carts', cart)

        .run();
        res.send(cart);

    }catch(ex){
        res.send(ex);
    }
})

module.exports=router;