const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    eventName: {
        type: String,
        required: true
    },
    organizerID: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    dateTime: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Event', EventSchema);