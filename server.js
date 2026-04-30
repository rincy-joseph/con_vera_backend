const express = require('express')
const cors = require('cors')
const http = require('http')
const app = express()
const { Server } = require('socket.io')
const chatRouter = require('./modules/chatRouter')
const server = http.createServer(app)
const chatService = require('./modules/chatServices')

const PORT = 3001
app.use(cors())
app.use(express.json)
app.use('/api', chatRouter)
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