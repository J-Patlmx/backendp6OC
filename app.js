const express = require('express');
const mongoose = require('mongoose');
const app = express();

const userRoutes = require('./routes/user');
//  const Sauces = require('./models/sauces');
// const saucesRoutes = require('./routes/sauces');


require('dotenv').config()

mongoose.connect(`mongodb+srv://${process.env.USER1}:${process.env.PASSWORD}@${process.env.MONGO_DB_ACCESS}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));



app.use(express.json());

// app.use('/api/sauces', stuffRoutes);


// middleware general pour toute les routes
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/auth', userRoutes);
// app.use('/api/Sauce', saucesRoutes);

// //route post Sauce
// app.post('/api/sauces', (req, res, next) => {
//     delete req.body._id;
//     const sauces = new Sauces({
//         ...req.body
//     });
//     sauces.save()
//         .then(() => res.status(201).json({ message: 'sauce enregistré !' }))
//         .catch(error => res.status(400).json({ error }));
// });

// //route update Sauce
// app.put('/api/sauces/:id', (req, res, next) => {
//     Sauces.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
//         .then(() => res.status(200).json({ message: 'sauce modifié !' }))
//         .catch(error => res.status(400).json({ error }));
// });

// //route delete Sauce
// app.delete('/api/sauces/:id', (req, res, next) => {
//     Sauces.deleteOne({ _id: req.params.id })
//         .then(() => res.status(200).json({ message: 'sauce supprimé !' }))
//         .catch(error => res.status(400).json({ error }));
// });

// // route get Sauce
// app.get('/api/sauces/:id', (req, res, next) => {
//     Sauces.findOne({ _id: req.params.id })
//         .then(sauces => res.status(200).json(sauces))
//         .catch(error => res.status(404).json({ error }));
// });


module.exports = app;
