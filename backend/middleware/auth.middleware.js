const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.isAuthenticated = async(req, res, next)=>{
    try {
        const {token} = req.cookies;
        if(!token){
            return res.status(403).json({
                success: false,
                error: "Please Login First"
            })
        }

        const decode = await jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findById(decode._id);

        if(!req.user){
            return res.status(401).json({
                error: "Please login first",
                success: false
            })
        }
        
        next(); 
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        })
    }
}