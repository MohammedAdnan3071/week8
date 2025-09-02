// Add route skeleton for user login , signup, purchase a course ,sees all courses, sees the purchased courses 
require('dotenv').config();
console.log(process.env.MONGO_URI);
console.log(process.env.JWT_USER_PASSWORD);
console.log(process.env.JWT_ADMIN_PASSWORD);
const express = require("express");
const  { userRouter } = require("./routes/user");
const  { courseRouter }= require("./routes/course");
const { adminRouter }  = require("./routes/admin")
const app = express();

app.use(express.json());

const PORT = 3000;




app.use("/api/v1/user",userRouter);
app.use("/api/v1/course",courseRouter);
app.use("/api/v1/admin", adminRouter);



app.listen(PORT,()=>{
    console.log(`Server running on PORT:${PORT}`)
})