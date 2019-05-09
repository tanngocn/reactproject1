require('express-async-errors');
const express= require('express');
const cors= require('cors');
const mongoose=require('mongoose');
const Joi = require('joi');
Joi.objectId=require('joi-objectid')(Joi);
const fileupload=require('express-fileupload');
// router import
const kindproductRouter= require('./routes/kindProduct');
const materialRouter =require('./routes/materialProduct');
const registerRouter =require('./routes/user');
const authRouter =require('./routes/auth');
const productRouter=require('./routes/product');
const uploadRouter = require('./routes/upload');

// config mongodb
    mongoose.connect('mongodb://localhost/finalProject')
    .then(()=>{
        console.log('Connect to mongodb...');
    }).catch(ex=>{
        console.log('Connect faile !',ex);
    })
// cors
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
  }

const app =  express();
app.use(cors(corsOptions));
// upload
app.use(fileupload());
app.use(express.json());

// app.use(bodyParser.json());
// router
app.use('/api/kindproduct', kindproductRouter);
app.use('/api/material', materialRouter);
app.use('/api/register', registerRouter);
app.use('/api/auth', authRouter);
app.use('/api/product', productRouter);
app.use('/api/upload', uploadRouter)
const port=process.env.PORT ||5000
app.listen(port,()=>{
    console.log('server running in',port );
})