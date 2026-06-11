const express = require('express')
const cors = require('cors')
const http = require('http')
const app = express()
const { Server } = require('socket.io')
const server = http.createServer(app)
const chatService = require('./modules/ChatDetails/chatServices')
const ListRouter = require('./modules/MessageList/messageRouter')
const chatRouter = require('./modules/ChatDetails/chatRouter')

const PORT = 3001
app.use(cors())
app.use(express.json())
app.use('/api', chatRouter)
app.use('/api', ListRouter)

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ['GET', 'POST']
    }
})

io.on('connection', (socket) => {
    socket.on('send_message', (data) => {
        chatService.saveChat(data)
        io.emit("receive_message", data)
    })
    socket.on('disconnect', () => {
        console.log("Socket disconnected")
    })
})
server.listen(PORT, () => {
    console.log("Server Ready for Running in PORT : ", PORT)
})