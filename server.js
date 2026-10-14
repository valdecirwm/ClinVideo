const express = require('express')
const app = express()
const PORT = 3000
const { v4: uuidv4 } = require('uuid');
const path = require('path')
const basePath = path.join(__dirname, 'views')

// renderiza a Engine EJS
app.set('view engine', 'ejs')
// indicando o caminho de Views
app.set('views', basePath)

app.get('/:room', (req, res) => {
    res.render('room', {roomId: req.params.room})
})

app.get('/', (req, res) => {
    res.redirect(`/${uuidv4()}`)
})

app.listen(PORT, () => {
    console.log(`APLICATIVO RODANDO NA PORTA ${PORT}`)
})