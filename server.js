const express = require('express')
const app = express()
const PORT = 3000
const server = require('http').Server(app)
const io = require('socket.io')(server)
// const { v4: uuidv4 } = require('uuid');
const path = require('path')
const { Socket } = require('socket.io')
const basePath = path.join(__dirname, 'views')
const { PeerServer } = require("peer");
const videoRoutes = require('./routes/videoRoutes')

// renderiza a Engine EJS
app.set('view engine', 'ejs')
// indicando o caminho de Views
app.set('views', basePath)
// pegando arquivos fixos css e js
app.use(express.static('public'))

// ---- ROTAS ----
app.use('/', videoRoutes);

io.on('connection', socket => {
    socket.on('join-room', (roomId) => {
        socket.join(roomId)
        socket.to(roomId).emit('user-connected')
    })
})

server.listen(PORT, () => {
    console.log(`APLICATIVO RODANDO NA PORTA ${PORT}`)
})