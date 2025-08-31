// Add route skeleton for user login , signup, purchase a course ,sees all courses, sees the purchased courses 


const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3000;


const MainRouter = require('express').Router();

MainRouter.use("./routes/signin.js")

app.post("/userLogin", (req,res)=>{

});

app.post("/signup",(req,res)=>{

});

app.post("/purchaseCourse",(req,res)=>{

});

app.get("/getAllCourses",(req,res)=>{

});

app.get("/UserPurchasedCourses",(req,res)=>{

});







app.listen(PORT,()=>{
    console.log(`Server running on PORT:${PORT}`)
})