const jwt = require("jsonwebtoken");
const user = require("../routes/user");
const jwt_user= process.env.JWT_USER_PASSWORD;


function userMiddleware(req,res,next){
   const token = req.headers.token;
   const decoded = jwt.verify(token,jwt_user);
   if(decoded){
    req.userId = decoded.id;
    next();
   }else{
    res.status(403).json({
        message :" You are not signed in "
    })
   }

}


module.exports =  userMiddleware