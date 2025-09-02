const express = require("express");
const jwt = require("jsonwebtoken");
const Router = express.Router();


const { adminModel, courseModel } =require("../db");
const adminMiddleware = require("../middlewares/admin.middleware");
const adminRouter = express.Router();
const jwt_admin = process.env.JWT_ADMIN_PASSWORD




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



adminRouter.post("/course", adminMiddleware,async(req,res)=>{
    const adminId = req.userId;

    const {title, description, imageUrl, price} = req.body;

    const newCourse =  await courseModel.create({
        title:title,
        description:description,
        imageUrl :imageUrl,
        price:price,
        creatorId : adminId
     })
    res.json({
        message:"Admin created a course",
        courseId : newCourse._id
    })
});




adminRouter.put("/course",adminMiddleware,async(req,res)=>{
        const adminId = req.userId;

    const {title, description, imageUrl, price} = req.body;

    const newCourse =  await courseModel.updateOne({
        _id : courseId,
        creatorId:adminId
    },{
        title:title,
        description:description,
        imageUrl :imageUrl,
        price:price
     })
    res.json({
        message:"Admin updated the course",
        courseId : newCourse._id
    })
    
});


adminRouter.get("/bulk",adminMiddleware,async(req,res)=>{
    const adminId = req.userId;

    const {title, description, imageUrl, price} = req.body;

    const courses =  await courseModel.find({
        creatorId:adminId
     })
    res.json({
        message:"Admin previewed all courses",
        courses
    })
    
});


module.exports = {
    adminRouter:adminRouter
}