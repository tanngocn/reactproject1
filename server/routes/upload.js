const mongoose = require('mongoose');
const express = require('express');
const router= express.Router();

    router.post('/',async(req, res)=>{
        let {imgProduct}=req.body
        if(req.files===null){
            return res.status(400).json({msg:'No file upload'});
        }
        imgProduct= req.files.imgProduct;   
            imgProduct.mv(`./../../finalproject/server/client/public/uploads/${imgProduct.name}`,err=>{
                if(err){
                    return res.status(500).send(err);
                }
            })  
        res.send(imgProduct);
    })
module.exports=router;