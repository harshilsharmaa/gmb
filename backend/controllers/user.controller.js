const User = require('../models/User');

exports.profile  = async(req,res)=>{
    try {

        const user = req.user;

        res.status(200).json({
            user,
            success: true
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            error:error.message
        }) 
    }
}