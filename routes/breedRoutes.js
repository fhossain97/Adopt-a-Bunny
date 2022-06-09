const express = require('express')
const router = express.Router()
const breedCtrl = require('../controllers/breedController')

router.get('/', breedCtrl.indexRoute)

router.post('/', breedCtrl.createRoute)

// router.get('/:id', breedCtrl.showRoute)

router.patch('/:id', breedCtrl.updateRoute)

router.delete('/:id', breedCtrl.deleteRoute)

module.exports = router
