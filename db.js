const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then( () => console.log("✅ MongoDb connected"))
.catch(err =>{
    console.log("❌ Mongodb Connection error:",err.message);
    process.exit(1);
});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const userSchema =  new Schema({
    email: {type:String, required:true, unique:true},
     password : String,
     firstName :String,
     lastName : String
});


const adminSchema =  new Schema({
      email: {type:String, required:true, unique:true},
     password : String,
     firtName :String,
     lastName : String
    });



const courseSchema =  new Schema({
    title:String,
    description :String,
    price:Number,
    imageUrl : String,
    creatorId : ObjectId
});

const purchaseSchema =  new Schema({
    userId:ObjectId,
    courseId :ObjectId
});


const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course",courseSchema);
const purchaseModel = mongoose.model("purchase",purchaseSchema);



module.exports ={
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}