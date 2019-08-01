// user 스키마
const mongoose = require('mongoose');
// user 스키마 정의
const { Schema } = mongoose;
const userSchema = new Schema({
    userid: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    originpass: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    carsell: {
        type: Number,
        default: 0
    },
    carsellc: {
        type: Number,
        default: 0
    }
});
module.exports = mongoose.model('User', userSchema);