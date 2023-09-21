const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    case_id: {
        type: Schema.Types.ObjectId,
        ref: "ClaimantCase"
    },
    task: {
        type: String
    },
    event: {
        type: String
    },
    remind_date: {
        type: Date
    },
    deadline_date: {
        type: Date
    },
    priority:{
        type: String,
        enum: ['Low', 'High']
    },
    details: {
        type: String
    },
    assignee: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }

})

module.exports = mongoose.modal('Task', taskSchema);