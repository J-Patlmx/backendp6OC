const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');


const saucesCtrl = require('../controllers/sauces');
//route post
router.post('/', auth, multer, saucesCtrl.createSauce);

//route update 
router.put('/:id', auth, multer, saucesCtrl.modifySauce);

//route delete
router.delete('/:id', auth, saucesCtrl.deleteSauce);

// route getOne
router.get('/:id', auth, saucesCtrl.getOneSauce);

// route getAll
router.use('/', auth, saucesCtrl.getAllSauce);

// router.post('/', saucesCtrl.getAllThing)


router.post('/:id/like', auth, saucesCtrl.rateSauce);


module.exports = router;