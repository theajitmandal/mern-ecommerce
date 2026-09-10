const express = require('express')
const { helloFunction } = require('../controllers/categoryController')
const router = express.Router()

router.get('/test', helloFunction)

module.exports = router