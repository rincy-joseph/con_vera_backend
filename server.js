const express = require('express')
const cors = require('cors')
const http = require('http')
const app = express()
const { Server } = require('socket.io')

const server = http.createServer(app)
const PORT = 3001
app.use(cors())
app.use(express.json)
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ['GET', 'POST']
    }
})

io.on('connection', (socket) => {
    socket.on('send_message', () => {
        io.emit("Message Received")
    })
    socket.on('disconnect', () => {
        console.log("Socket disconnected")
    })
})
app.listen(PORT, () => {
    console.log("Server Ready for Running in PORT : ", PORT)
})