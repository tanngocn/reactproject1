const mongoose = require('mongoose');
const express = require('express');
const router= express.Router();

    router.post('/',async(req, res)=>{
        let {file}=req.body
        if(req.files===null){
            return res.status(400).json({msg:'No file upload'});
        }
        file= req.files.file;   
        file.mv(`./../../finalproject/server/client/public/uploads/${file.name}`,err=>{
                if(err){
                    return res.status(500).send(err);
                }
            })  
        res.send(file);
    })
module.exports=router;