module.exports=function asyncMiddleware(handdle){
    return async(req, res, next)=>{
        try{
            await handdle;
        }catch(ex){
            next(ex);
        }
    };
}