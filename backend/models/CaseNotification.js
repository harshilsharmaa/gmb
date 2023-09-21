const mongoose = require('mongoose');

const caseNotificationSchema = mongoose.Schema({
    
    bi_case_id: {
        type: Schema.Types.ObjectId,
        ref: "ClaimantCase"
    },
    description: {
        type: String,
        max: 250
    },
    show_on: {
        type: Date
    },
    ack_status:{
        type: Sring,
        enum: ['Acknowledged','Not Acknowledged'],
        default: 'Acknowledged'
    },
    assigned_to: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    notification_status:{
        type: String,
        max: 250
    }

});

module.exports = mongoose.modal('CaseNotification', caseNotificationSchema);