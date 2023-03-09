const mongoose = require('mongoose');

const saucesSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    mainPepper: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    heat: {
        type: Number,
        required: true
    },
    like: {
        type: Number,
        required: true,
        default: 0
    },
    dislike: {
        type: Number,
        required: true,
        default: 0
    },
    usersLiked: {
        type: [String],
        required: true,
        default: []
    },
    usersDisliked: {
        type: [String],
        required: true,
        default: []
    },
});

module.exports = mongoose.model('Sauces', saucesSchema);