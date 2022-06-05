const express = require('express')
const router = express.Router()
const rabbitCtrl = require('../controllers/rabbitController')

router.get('/new', rabbitCtrl.newRoute)

router.get('/', rabbitCtrl.indexRoute)

router.post('/', rabbitCtrl.createRoute)

router.post('/:id/adopt', rabbitCtrl.adopt)

router.get('/:id', rabbitCtrl.showRoute)

router.get('/:id/edit', rabbitCtrl.editRoute)

router.patch('/:id', rabbitCtrl.updateRoute)

router.delete('/:id', rabbitCtrl.deleteRoute)

module.exports = router
