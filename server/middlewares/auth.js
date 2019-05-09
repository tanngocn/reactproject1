const jwt=require('jsonwebtoken');
    module.exports=function(req,res,next){
        const token=req.header('x-auth-token');
        if(!token) return res.status(401).send('Access denied. No token Provider');
        try{
            //jwt.verify kiem chung no da co tinh hop le 
            //token la chuoi jsonwebtoken
            const decoded=jwt.verify(token,'jwtPrivateKey');
            req.user=decoded;
            next();
        }catch(ex){
            res.status(400).send('Invalid token');
        }
    }