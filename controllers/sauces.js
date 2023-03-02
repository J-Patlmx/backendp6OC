const Sauce = require('../models/sauces');

//route post
exports.createSauce = (req, res, next) => {
    delete req.body._id;
    const sauce = new sauce({
        ...req.body
    });
    sauce.save()
        .then(() => res.status(201).json({ message: 'sauce enregistré !' }))
        .catch(error => res.status(400).json({ error }));
}
//route update 
exports.modifySauce = (req, res, next) => {
    Sauce.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'sauce modifié !' }))
        .catch(error => res.status(400).json({ error }));
};
//route delete
exports.deleteSauce = (req, res, next) => {
    Sauce.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'sauce supprimé !' }))
        .catch(error => res.status(400).json({ error }));
};
// route getOne
exports.getOneSauce = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id })
        .then(sauces => res.status(200).json(sauces))
        .catch(error => res.status(404).json({ error }));
};

// route getAll

exports.getAllsauce = (req, res, next) => {
    Sauce.find()
        .then(sauces => res.status(200).json(sauces))
        .catch(error => res.status(404).json({ error }));

};