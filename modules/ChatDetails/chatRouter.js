const express = require('express')
const router = express.Router()
const chatController = require('./chatController')
router.get('/GetMessagedetails', chatController.getDetails)
module.exports = router