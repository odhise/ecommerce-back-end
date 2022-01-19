const jwt=require("jsonwebtoken");

const {Router} = require("express");

const verifyToken=(req,res,next)=>{

    const authHeader=req.headers.token;
if(authHeader){

    const token = authHeader.split(" ")[1];
    jwt.verify(token,process.env.JWT_SEC, (err,user)=>{
        err ? res.status(404).json("token is not valid"):req.user=user

        next()
    })

        

}else{res.status(401).json("user not authenticated")}

}

const verifyTokenAndAuthorization=(req,res,next)=>{

    verifyToken(req,res,()=>{
        if(req.user.id===req.params.id||req.user.isAdmin){
            next()
        }else{
            res.status(500).json("You cannot support this task")
   }
 })
}


const verifyTokenAndAdmin=(req,res,next)=>{
    verifyToken(req,res,()=>{
        console.log(req.user)
        if(`Error ${req.user}`){
            next()
        }else{
            res.status(500).json("You can support this task")
            console.log(`Error ${req,user}`)
   }
 })
}

module.exports={verifyTokenAndAuthorization,verifyTokenAndAdmin}