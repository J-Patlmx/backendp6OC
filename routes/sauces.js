const express = require('express');
const router = express.Router();

const saucesCtrl = require('../controllers/sauces');
//route post
router.post('/', saucesCtrl.createThing);

//route update 
router.put('/:id', saucesCtrl.modifyThing)

//route delete
router.delete('/:id', saucesCtrl.deleteThing)

// route getOne
router.get('/:id', saucesCtrl.getOneThing)

// route getAll
router.use('/', saucesCtrl.getAllThing)



module.exports = router;