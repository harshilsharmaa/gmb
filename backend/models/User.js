const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        minlength: 8,
        required: true
    },
    userRole: {
        type: String,
        default: 'user'
    },
    group_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group'
    },
    first_name: {
        type: String,
        default: null
    },
    last_name: {
        type: String,
        default: null
    },
    phone:{
        type: Number,
        default: null 
    },
    last_login_date: {
        type: Date,
        default: null
    },
    active: {
        type: Boolean,
        default: true
    },
    site: {
        type: String,
        default: null
    },
    local_only: {
        type: Boolean
    },
    debugger: {
        type: Boolean
    }
})

userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
})

userSchema.methods.generateJWTtoken = function(){
    return jwt.sign({_id:this._id}, process.env.JWT_SECRET)
}

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

module.exports = mongoose.model('User', userSchema);