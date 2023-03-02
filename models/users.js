const mongoose = require('mongoose');
const validator = require('validator');

const usersSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        Validate: [validator.isEmail, 'Email invalide']
    },
    password: {
        type: String,
        required: true
    },

});

module.exports = mongoose.model('Users', usersSchema);