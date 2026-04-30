const express = require('express')
const router = express.Router()
const chatController = require('./chatController')
router.post('/InsertChat', chatController.handleMessage)
module.exports = router