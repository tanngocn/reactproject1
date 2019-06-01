const mongoose = require('mongoose');
const express = require('express');
const {KindRaiting, validate} = require('../models/KindRaiting');
const router = express.Router();
//get
router.get('/', async (req, res)=>{
    const kindRaiting=  await KindRaiting.find();
    res.json(kindRaiting);
})
//post
router.post('/' , async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
  
    let kindRaiting = new KindRaiting({ name: req.body.name });
    kindRaiting = await kindRaiting.save();
    
    res.send(kindRaiting);
  });
  
module.exports=router;
