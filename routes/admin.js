const express = require("express");
const jwt = require("jsonwebtoken");
const Router = express.Router();
const { adminModel } =require("../db");
const adminRouter = express.Router();
const jwt_admin = process.env.JWT_ADMIN_PASSWORD

// Add routes for admin login, admin signup, create a course, delete a course, add course content.


adminRouter.post("/signUp", async(req,res)=>{
    // email , password, firstname , lastname 
     const {email, password, firstName, lastName} = req.body;

     await adminModel.create({
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName
     })

    res.json({
        message:"Admin Signned UP"
    })
});
adminRouter.post("/",(req,res)=>{
    res.json({
        message:"Admin created a course"
    })
});


adminRouter.post("/signIn",async(req,res)=>{
const {email, password} =req.body;
    const admin = await adminModel.findOne({
        email:email,
        password:password
    })
    if(admin){
       const   token = jwt.sign({
            id:admin._id
         },jwt_admin)
         res.json({
            token :token
         })
    }else{
    res.status(403).json({
        message:"Incorrect Credentials !"
    })     
    }
    
});


adminRouter.put("/",(req,res)=>{
    res.json({
        message:"Admin changed course"
    })
});


adminRouter.get("/bulk",(req,res)=>{
    res.json({
        message:"all courses for the admin"
    })
});


module.exports = {
    adminRouter:adminRouter
}