const express = require('express')
const router = express.Router()
const chatController = require('./chatController')
console.log('commonMessage chat router')
router.get('/GetMessagedetails/:id', chatController.getDetails)
module.exports = router
