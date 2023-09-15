const validate=(req,res,next)=>{
    if(req.params.age>=18)
    {
        next();
    }
    else{
        res.send({Msg:"User not Allow to read the News"})
    }
};
module.exports=validate