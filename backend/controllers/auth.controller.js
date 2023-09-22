const User = require('../models/User');


exports.register = async(req,res)=>{
    try {

        const {username, email, password} = req.body;

        if(!username || !email || !password){
            return res.status(400).json({
                success: false,
                error: "All Feilds are required"
            })
        }

        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                success: false,
                error: "Email already registered"
            })
        }

        user = await User.create({username, email, password});

        const jwtToken = await user.generateJWTtoken();

        res.
        cookie('token', jwtToken, {expiresIn: new Date(Date.now + 1000*60*60*24), httpOnly:true }).
        status(201).json({
            success: true,
            message: "User registered successfully",
            user
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            error:error.message
        })
    }
}

exports.login = async(req,res)=>{
    try {
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                success: false,
                error: "All Feilds are required"
            })
        }

        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                success: false,
                error: "User with this email Not Found"
            })
        }

        const matchPassword = await user.comparePassword(password);

        if(!matchPassword){
            return res.status(400).json({
                success: false,
                error: "Wrong Password"
            })
        }

        const jwtToken = await user.generateJWTtoken();
        res.
        cookie('token', jwtToken, {expiresIn: new Date(Date.now + 1000*60*60*24), httpOnly:true }).
        status(201).json({
            success: true,
            message: "User LoggedIn successfully",
            user
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            error:error.message
        })
    }
}