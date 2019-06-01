const {Review}=require('./../models/Review');
const _ =require('lodash');

module.exports=async function(req, res, next){
    let review= await Review.find();
    let a=null;
    // tim xem trong review da ton tai nguoi danh gia san pham do chua
     a= _.find(review, function(v){
        let userId= JSON.stringify(v.user._id);
        let productId=JSON.stringify(v.product._id);
        // console.log( typeof userId);
        // console.log(typeof req.body.userId);
         console.log(userId===JSON.stringify(req.body.userId))
        return userId===JSON.stringify(req.body.userId) && productId ===JSON.stringify(req.body.productId)
    })
    if(a) return res.status(403).send("User already review");
    next();
}