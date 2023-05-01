const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000

app.use(cors())

const dishes = require('./data/dishes.json')

app.get('/', (req, res) => {
     res.send('Hello World!')
})
app.get('/dishes', (req, res) => {
     res.send(dishes)
})


app.listen(port, () => {
     console.log(`Example app listening on port ${port}`)
})