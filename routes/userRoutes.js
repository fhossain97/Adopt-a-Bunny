const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/userController')

router.get('/new', userCtrl.newRoute)

router.get('/', userCtrl.indexRoute)

router.post('/', userCtrl.createRoute)

router.get('/:id', userCtrl.showRoute)

router.get('/:id/edit', userCtrl.editRoute)

router.patch('/:id', userCtrl.updateRoute)

router.delete('/:id', userCtrl.deleteRoute)

module.exports = router