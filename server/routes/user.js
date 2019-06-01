
const mongoose = require('mongoose');
const express = require('express');
const {User, validate} = require('../models/User');
const _ =require('lodash');
const bcrypt=require('bcrypt')
const router= express.Router();

//getList
router.get('/', async (req,res)=>{
    const users= await User.find().select('-password');
    res.send(users);
})
//post
router.post('/',async(req,res)=>{
    // check loi nhap lieu
    const {error} =validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    // kiem tra email trung
    let user=await User.findOne({email:req.body.email});
    if(user) return res.status(400).send('Email is existing');
    // dua du lieu vao
    user = new User(_.pick(req.body,['username','email','password']));
    // hash password
   
    const salt= await bcrypt.genSalt(10);
    user.password= await bcrypt.hash(user.password,salt);    
    await user.save();

    const token=user.generateAuthToken();
    res.header('x-auth-token',token).send(_.pick(user, ['_id', 'username', 'email','isAdmin']));
});
// Delete 
    router.delete('/:id', async(req, res)=>{
        const user= await User.findByIdAndRemove(req.params.id);
        if (!user) return res.status(400).send("The user with Id was not found");
        res.json(user);
    })

module.exports=router;