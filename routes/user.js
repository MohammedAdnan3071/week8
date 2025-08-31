const express = require('express');
const Router = express.Router();

const userRouter  = express.Router();   


userRouter.post("/signUp",(req,res)=>{
    res.json({
        message:"You are signed Up!"
    })
});



userRouter.post("/signIn",(req,res)=>{
    res.json({
        message:"You are signed In!"
    })
});



userRouter.get("/purchases",(req,res)=>{
    res.json({
        message:"You are signed Up!"
    })
});


module.exports =  {
    userRouter :userRouter
}