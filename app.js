const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Thing = require('./models/thing');
require('dotenv').config()
console.log(process.env.USER);
// mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.MONGO_DB_ACCESS}`,

//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(() => console.log('Connexion à MongoDB réussie !'))
//     .catch((e) => console.log(`mongodb+srv://${process.env.USER1}:${process.env.PASSWORD}@${process.env.MONGO_DB_ACCESS}`) + e);


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://JPLmx:<password>@clusterjplmx.ljicgum.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});



// mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.MONGO_DB_ACCESS}`,
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(() => console.log('Connexion à MongoDB réussie !'))
//     .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use(express.json());
app.use('/api/stuff', (req, res, next) => {
    const stuff = [
        {
            _id: 'oeihfzeoi',
            title: 'Mon premier objet',
            description: 'Les infos de mon premier objet',
            imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
            price: 4900,
            userId: 'qsomihvqios',
        },
        {
            _id: 'oeihfzeomoihi',
            title: 'Mon deuxième objet',
            description: 'Les infos de mon deuxième objet',
            imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
            price: 2900,
            userId: 'qsomihvqios',
        },
    ];
    res.status(200).json(stuff);
});

app.post('/api/stuff', (req, res, next) => {
    delete req.body._id;
    const thing = new Thing({
        ...req.body
    });
    thing.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
        .catch(error => res.status(400).json({ error }));
});

app.use('/api/stuff', (req, res, next) => {
    Thing.find()
        .then(things => res.status(200).json(things))
        .catch(error => res.status(400).json({ error }));
});


module.exports = app;

