const express = require("express");
const Router = express.Router();


const courseRouter = express.Router();


courseRouter.post("/purchase",(req,res)=>{
    res.json({
        message:"You purchasesd this course"
    })
});


courseRouter.get("/preview",(req,res)=>{
    res.json({
        message:"You purchasesd this course"
    })
});






module.exports = {
    courseRouter :courseRouter
}