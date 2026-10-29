const express = require('express')
const app = express()
const PORT = 3000
const server = require('http').Server(app)
const io = require('socket.io')(server)
const { v4: uuidv4 } = require('uuid');
const path = require('path')
const { Socket } = require('socket.io')
const basePath = path.join(__dirname, 'views')
const { PeerServer } = require("peer");

// renderiza a Engine EJS
app.set('view engine', 'ejs')
// indicando o caminho de Views
app.set('views', basePath)
app.use(express.static('public'))

// ROTAS DA API
app.get('/:room', (req, res) => {
    res.render('room', {roomId: req.params.room})
})

app.get('/', (req, res) => {
    res.redirect(`/${uuidv4()}`)
})

io.on('connection', socket => {
    socket.on('join-room', (roomId) => {
        socket.join(roomId)
        socket.to(roomId).emit('user-connected')
    })
})

server.listen(PORT, () => {
    console.log(`APLICATIVO RODANDO NA PORTA ${PORT}`)
})