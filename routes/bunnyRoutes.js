const express = require('express')
const router = express.Router()
const bunnyCtrl = require('../controllers/bunnyController')

router.get('/new', bunnyCtrl.newRoute)

router.post('/', bunnyCtrl.createRoute)

router.post('/:id/adopt', bunnyCtrl.adopt)

router.get('/:id', bunnyCtrl.showRoute)

router.get('/:id/edit', bunnyCtrl.editRoute)

router.patch('/:id', bunnyCtrl.updateRoute)

router.delete('/:id', bunnyCtrl.deleteRoute)

module.exports = router