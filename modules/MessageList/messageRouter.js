
const express = require('express')
const router = express.Router()
const messageController = require('../MessageList/messageController')
console.log('commonMessage result data')
router.get('/GetMessageList', messageController?.getList);
module.exports = router;