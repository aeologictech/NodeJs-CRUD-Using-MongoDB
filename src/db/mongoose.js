const mongoose = require('mongoose')

MONGODB_URL="mongodb://127.0.0.1:27017/app"

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useCreateIndex: true,useNewUrlParser: true }, () => {
    console.log('DataBase Connected!')
})