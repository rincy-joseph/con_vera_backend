
const express = require('express')
const router = express.Router()
const messageController = require('../MessageList/messageController')
router.get('/GetMessageList', messageController?.getList);
router.post('/CreateDiscussion', messageController?.createDiscussion);
module.exports = router;