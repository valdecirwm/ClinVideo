const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('TUDOOK')
})

app.listen(PORT, () => {
    console.log(`APLICATIVO RODANDO NA PORTA ${PORT}`)
})