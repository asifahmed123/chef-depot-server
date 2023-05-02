const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000

app.use(cors())

const chefs = require('./data/chefs.json')

app.get('/', (req, res) => {
     res.send('Hello World!')
})
app.get('/chefs', (req, res) => {
     res.send(chefs)
})
app.get('/chefs/:id', (req, res) => {
     const id = parseInt(req.params.id)
     const selectedItem = chefs.find(d => d.id === id)
     res.send(selectedItem)
})

app.listen(port, () => {
     console.log(`Example app listening on port ${port}`)
})