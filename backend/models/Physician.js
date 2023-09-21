const mongoose = require('mongoose');

const physicianSchema = mongoose.Schema({
    referral_id: {
        type: Number,
        default: null
    },
    fullname: {
        type: String,
        max: 50,
        default: null
    },
    specialty: {
        type: String,
        max: 50,
        default: null
    },
    address1: {
        type: String,
        max: 50,
        default: null
    },
    address2: {
        type: String,
        max: 50,
        default: null
    },
    state: {
        type: String,
        max: 50,
        default: null
    },
    city: {
        type: String,
        max: 50,
        default: null
    },
    zip: {
        type: String,
        max: 50,
        default: null
    },
    phone1:{
        type: Number,
        default: null 
    },
    phone1_addition:{
        type: Number,
        default: null 
    },
    phone2:{
        type: Number,
        default: null 
    },
    phone2_addition:{
        type: Number,
        default: null 
    },
    fax: {
        type: String,
        max: 50,
        default: null
    },
    email: {
        type: String,
        max: 50,
        default: null
    },
    notes: {
        type: String,
        default: null
    },
    prescription: {
        type: String,
        default: null
    },
    date_first_visit: {
        type: Date,
        default: null
    },
    date_last_visit: {
        type: Date,
        default: null
    },
    date_next_visit: {
        type: Date,
        default: null
    },
    active: {
        type: Boolean,
        default: true
    },
})

module.exports = mongoose.modal('Physician', physicianSchema);