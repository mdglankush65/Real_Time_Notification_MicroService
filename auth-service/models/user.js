const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    connected: {
        type: Boolean,
        default: false
    },
});

const User = model('User', UserSchema);

module.exports = User;