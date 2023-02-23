const express = require('express');

const app = express();


module.exports = app;

const mongoose = require('mongoose');

mongoose.connect('mmongodb+srv://jpatlmxdevdread:<password>@p6.mxkxiqn.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));
