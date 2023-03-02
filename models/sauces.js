const mongoose = require('mongoose');

const saucesSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Sauces', saucesSchema);