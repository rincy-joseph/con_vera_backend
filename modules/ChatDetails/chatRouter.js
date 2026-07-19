const express = require('express')
const router = express.Router()
const chatController = require('./chatController')
router.get('/GetMessagedetails/:id', chatController.getDetails)
module.exports = router
