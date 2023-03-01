const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    mail: { type: String, required: true },
    password: { type: String, required: true },
    userId: { type: String, required: true },
});

module.exports = mongoose.model('Users', usersSchema);