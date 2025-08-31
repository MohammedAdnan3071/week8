const express = require("express");
const Router = express.Router();

const adminRouter = express.Router();


// Add routes for admin login, admin signup, create a course, delete a course, add course content.


adminRouter.post("/signIn",(req,res)=>{
    res.json({
        message:"Admin Signned IN"
    })
});


adminRouter.post("/signUp",(req,res)=>{
    res.json({
        message:"Admin Signned UP"
    })
});
adminRouter.post("/course",(req,res)=>{
    res.json({
        message:"Admin created a course"
    })
});

adminRouter.put("/course",(req,res)=>{
    res.json({
        message:"Admin changed course"
    })
});


adminRouter.get("/course/bulk",(req,res)=>{
    res.json({
        message:"all courses for the admin"
    })
});


module.exports = {
    adminRouter:adminRouter
}