const mongoose = require('mongoose');
const DB_NAME = 'myblog'
const DB_PORT = 27017
const DB_URL = 'localhost'
mongoose.set('useCreateIndex', true) //加上这个
mongoose.connect(`mongodb://${DB_URL}:${DB_PORT}/${DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

let dbPromise = new Promise((resolve, reject) => {
    db.once('open', err => {
        if (!err) {
            resolve()
        } else {
            reject(err)
            console.log(err)
        }
    })
})
module.exports = dbPromise 