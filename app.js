const express = require('express');
const mongoose = require('mongoose');
const app = express();

const userRoutes = require('./routes/user');
// const Sauces = require('./models/sauces');
// const Users = require('./models/users');

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


//TODO:USERS WIP


// //route post users
// app.post('/api/sauces', (req, res, next) => {
//     delete req.body._id;
//     const users = new Users({
//         ...req.body
//     });
//     users.save()
//         .then(() => res.status(201).json({ message: 'user enregistré !' }))
//         .catch(error => res.status(400).json({ error }));
// });


// //route update users
// app.put('/api/sauces/:id', (req, res, next) => {
//     Users.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
//         .then(() => res.status(200).json({ message: 'users modifié !' }))
//         .catch(error => res.status(400).json({ error }));
// });

// //route delete users
// app.delete('/api/sauces/:id', (req, res, next) => {
//     Users.deleteOne({ _id: req.params.id })
//         .then(() => res.status(200).json({ message: 'user supprimé !' }))
//         .catch(error => res.status(400).json({ error }));
// });

// // route get users
// app.get('/api/sauces/:id', (req, res, next) => {
//     Users.findOne({ _id: req.params.id })
//         .then(users => res.status(200).json(users))
//         .catch(error => res.status(404).json({ error }));
// });


module.exports = app;

// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// const Thing = require('./models/thing');
// require('dotenv').config()
// console.log(process.env.USER);


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://JPLmx:<password>@clusterjplmx.ljicgum.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });


// app.use(express.json());
// app.use('/api/stuff', (req, res, next) => {
//     const stuff = [
//         {
//             _id: 'oeihfzeoi',
//             title: 'Mon premier objet',
//             description: 'Les infos de mon premier objet',
//             imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
//             price: 4900,
//             userId: 'qsomihvqios',
//         },
//         {
//             _id: 'oeihfzeomoihi',
//             title: 'Mon deuxième objet',
//             description: 'Les infos de mon deuxième objet',
//             imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
//             price: 2900,
//             userId: 'qsomihvqios',
//         },
//     ];
//     res.status(200).json(stuff);
// });

// app.post('/api/stuff', (req, res, next) => {
//     delete req.body._id;
//     const thing = new Thing({
//         ...req.body
//     });
//     thing.save()
//         .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
//         .catch(error => res.status(400).json({ error }));
// });

// app.use('/api/stuff', (req, res, next) => {
//     Thing.find()
//         .then(things => res.status(200).json(things))
//         .catch(error => res.status(400).json({ error }));
// });


// module.exports = app;





// // mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.MONGO_DB_ACCESS}`,

// //     {
// //         useNewUrlParser: true,
// //         useUnifiedTopology: true
// //     })
// //     .then(() => console.log('Connexion à MongoDB réussie !'))
// //     .catch((e) => console.log(`mongodb+srv://${process.env.USER1}:${process.env.PASSWORD}@${process.env.MONGO_DB_ACCESS}`) + e);





// // mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.MONGO_DB_ACCESS}`,
// //     {
// //         useNewUrlParser: true,
// //         useUnifiedTopology: true
// //     })
// //     .then(() => console.log('Connexion à MongoDB réussie !'))
// //     .catch(() => console.log('Connexion à MongoDB échouée !'));