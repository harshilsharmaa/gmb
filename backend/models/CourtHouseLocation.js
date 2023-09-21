const mongoose = require('mongoose');

const courtHouseLocationSchema = mongoose.Schema({
    name:{
        type: String,
        max: 50
    },
    address1:{
        type: String,
        max: 255
    },
    address2:{
        type: String,
        max: 255
    },
    state:{
        type: String,
        max: 50
    },
    city:{
        type: String,
        max: 50
    },
    city_id: {
        type: Number
    },
    zip: {
        type:String,
        max: 50
    },
    region_id: {
        type: Number
    },
    zip: {
        type:String,
        max: 50
    },
    contact_name: {
        type:String,
        max: 50
    },
    office_phone: {
        type:Number,
    },
    office_phone_ext: {
        type:Number,
    },
    cell_phone: {
        type:Number,
    },
    home_phone: {
        type:Number,
    },
    fax: {
        type:String
    },
    fax_ext: {
        type:Number,
    },
    email: {
        type:String,
    },
    notes: {
        type:String,
    },
    external_id: {
        type: Number
    },
    last_updated_date: {
        type: Date
    },
    active: {
        type: Boolean,
        default: true
    },
    site: {
        type: String
    }

})

module.exports = mongoose.modal('CourtHouseLocation', courtHouseLocationSchema);