const express = require("express");
const { purchaseModel, courseModel } = require("../db");
const Router = express.Router();


const courseRouter = express.Router();


courseRouter.post("/purchase",async(req,res)=>{
    const userId = req.userId;
    const courseId = req.body.courseId;

    await purchaseModel.create({
        userId,
        courseId
    })
    res.json({
        message:" purchasesd this course"
    })
});


courseRouter.get("/preview",async(req,res)=>{

    const courses = await courseModel.find({});
    res.json({
         courses
    })
});






module.exports = {
    courseRouter :courseRouter
}