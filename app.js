const express = require('express');
const mongoose = require('mongoose');
const app = express();

const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauces');
const path = require('path');


require('dotenv').config()

mongoose.connect(`mongodb+srv://${process.env.USER1}:${process.env.PASSWORD}@${process.env.MONGO_DB_ACCESS}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));



app.use(express.json());



// middleware general pour toute les routes
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/auth', userRoutes);

app.use('/api/sauces', sauceRoutes);

app.use('/images', express.static(path.join(__dirname, 'images')));


module.exports = app;
