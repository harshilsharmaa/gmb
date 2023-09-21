const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        max: 50,
        required: true
    },
    password: {
        type: String,
        max: 50,
        required: true
    },
    group_id: {
        type: Schema.Types.ObjectId,
        ref: 'Group'
    },
    first_name: {
        type: String,
        max: 50,
        default: null
    },
    last_name: {
        type: String,
        max: 50,
        default: null
    },
    phone:{
        type: Number,
        default: null 
    },
    email: {
        type: String,
        max: 50,
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

module.exports = mongoose.modal('User', userSchema);