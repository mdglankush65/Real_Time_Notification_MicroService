const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const notificationSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        require: true,
    },
    message: {
        type: String,
        require: true,
    },
    read: {
        type: Boolean,
        default: false,
    }
});

const Notice = model('Notice', notificationSchema);

module.exports = Notice;