const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000



const dishes = require('./data/dishes.json')

app.get('/', (req, res) => {
     res.send('Hello World!')
})
app.get('/dishes', (req, res) => {
     res.send(dishes)
})
app.get('/dishes/:id', (req, res) => {
     const id = parseInt(req.params.id)
     const selectedItem = dishes.find(d => d.id === id)
     res.send(selectedItem)
})

app.listen(port, () => {
     console.log(`Example app listening on port ${port}`)
})