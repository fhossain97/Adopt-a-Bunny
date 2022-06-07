const express = require('express')
const router = express.Router()
const rabbitCtrl = require('../controllers/rabbitController')

router.get('/', rabbitCtrl.indexRoute)

router.post('/', rabbitCtrl.createRoute)

router.get('/:id', rabbitCtrl.showRoute)

router.patch('/:id', rabbitCtrl.updateRoute)

router.delete('/:id', rabbitCtrl.deleteRoute)

module.exports = router
