const mongoose = require('mongoose');

const claimantCaseSchema = mongoose.Schema({
    case_number: {
        type:Number
    },
    claimant_id: {
        type:Number
    },
    status_id: {
        type:Number,
        default: 400
    },
    case_type_id: {
        type:Number
    },
    claim_type_id: {
        type:Number
    },
    policy_number: {
        type:Number
    },
    index_number: {
        type:Number
    },
    date_of_accident: {
        type: Date,
    },
    date_claim_reported: {
        type: Date,
    },
    date_sign_up: {
        type: Date,
    },
    claimant_type_id: {
        type: Number
    },
    loss_consciousness: {
        type: Boolean,
        default: false
    },
    loss_consciousness_details: {
        type: String
    },
    accident_in_NY: {
        type: Boolean,
        default: false
    },
    NY_policy_holder: {
        NY_policy_holder
    },
    accident_location: {
        type: String,
        max: 255
    },
    owner_vehicle: {
        type: String,
        max: 255
    },
    accident_description: {
        type: String,
    },
    member_houshold:{
        type: Boolean,
        default: false
    },
    police_called:{
        type: Boolean,
        default: false
    },
    police_called_details:{
        type: String,
    },
    ambulance_called:{
        type: Boolean,
        default: false
    },
    taken_to_hospital:{
        type: Boolean,
        default: false
    },
    taken_by_ambulance:{
        type: Boolean,
        default: false
    },
    taken_to_hospital_details:{
        type: String,
    },
    hospital_name:{
        type: String,
        max: 100
    },
    medical_record_number: {
        type: String,
        max: 50
    },
    xray_details: {
        type: String,
    },
    mri_details: {
        type: String,
    },
    oxygen_mask_details: {
        type: String,
    },
    equipment_details: {
        type: String,
    },
    witnesses_details: {
        type: String,
    },
    injuries_details: {
        type: String,
    },
    history_relevant_details: {
        type: String,
    },
    history_motor_details: {
        type: String,
    },
    history_lawsuits_details: {
        type: String,
    },
    photos_available: {
        type: Boolean,
        default: false
    },
    photos_available_details: {
        type: String,
    },
    additional_info: {
        type: String,
    },
    attorney_notes: {
        type: String,
    },
    creation_date:{
        type: Date
    },
    attorney: {
        type: Number
    },
    paralegal: {
        type: Number
    },
    assignee: {
        type: Number
    },
    alert: {
        type: String,
    },
    alert_by: {
        type: Number,
    },
    alert_date_created: {
        type: Date,
    },
    active: {
        type: Boolean,
        default: 1
    },
    policy_limit: {
        type: Number,
    },
    excess_policy_limit: {
        type: Number,
    },
    sub_case_type_id: {
        type: Number,
    },
    settleamount: {
        type: Number,
    },
    medicaidamount: {
        type: Number,
    },
    medicareamount: {
        type: Number,
    },
    funding: {
        type: Number,
    },
    wclien: {
        type: Number,
    },
    otherattorneyliens: {
        type: Number,
    },
    billingdate: {
        type: Date
    },
    limitsdata: {
        type: Date
    },
    l1: {
        type: Date
    },
    l2: {
        type: Date
    },
    document_json: {
        type: String
    },
    time_of_accident: {
        type: Date
    },
    ancillary_cca: {
        type: Number
    }

})

module.exports = mongoose.modal('ClaimantCase', claimantCaseSchema);