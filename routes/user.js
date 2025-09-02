const express = require('express');
const jwt = require("jsonwebtoken");
const Router = express.Router();
const {userModel} = require("../db");
const userRouter  = express.Router();   
require('dotenv').config();
const jwt_user = process.env.JWT_USER_PASSWORD;

userRouter.post("/signUp",(req,res)=>{
    const {email, password, firstName, lastName} = req.body;

    userModel.create({
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName
    })
    res.json({
        message:"You are signed Up!"
    })
});



userRouter.post("/signIn",async(req,res)=>{
    const {email, password} =req.body;
    const user = await userModel.findOne({
        email:email,
        password:password
    })
    if(user){
       const   token = jwt.sign({
            id:user._id
         },jwt_user)
         res.json({
            token :token
         })
    }else{
    res.status(403).json({
        message:"Incorrect Credentials !"
    })     
    }
   
});



userRouter.get("/purchases",(req,res)=>{
    res.json({
        message:"You are signed Up!"
    })
});


module.exports =  {
    userRouter :userRouter
}