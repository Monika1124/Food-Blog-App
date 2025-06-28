const jwt = require('jsonwebtoken');

const verifyToken = async(req, res, next) => {
    let token= req.headers['authorization'];

    // Check if token is provided in the Authorization header
    if(token){
        token = token.split(' ')[1]; // Remove 'Bearer ' prefix
        jwt.verify(token,process.env.SECRET_KEY,(err, decoded)=>{
            if(err){
                return res.status(401).json({message:"Invalid token"});
            }
            else{
            console.log(decoded);
            req.user=decoded; // Attach user info to request object
   
        }
 
     })
     next()
   
    }else{
    return res.status(401).json({message:"Token not provided"});
    }
    }
module.exports = verifyToken;