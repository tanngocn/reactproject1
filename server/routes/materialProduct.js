const mongoose = require('mongoose');
const express = require('express');
const {Material, validate} = require('./../models/Material');

const router= express.Router();
//get
    router.get('/',async (req, res)=>{
        const materials= await Material.find().sort('name');
        if(!materials) return res.status(400).send("No materials in collections");
        res.send(materials);
    })
//post
    router.post('/',async (req,res)=>{
        const {error} =validate(req.body);
        if (error) return res.status(400).send('Bad request');
        const material =new Material({name:req.body.name});
        await material.save();
        res.send(material);
    })
module.exports=router;