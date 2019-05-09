const mongoose = require('mongoose');
const express = require('express');
const {KindProduct, validate} = require('../models/KindProduct');
const router = express.Router();


router.get('/', async (req, res)=>{
    const kindProduct=  await KindProduct.find().sort('name');
    res.json(kindProduct);
})
router.post('/' , async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
  
    let kindProduct = new KindProduct({ name: req.body.name });
    kindProduct = await kindProduct.save();
    
    res.send(kindProduct);
  });
  
  module.exports=router;