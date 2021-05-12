const express = require('express');
require('./db/mongoose')
const bodyParser = require('body-parser')
const userRouter = require('./router/user')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(userRouter)

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log('Server is up to ' + port )
})