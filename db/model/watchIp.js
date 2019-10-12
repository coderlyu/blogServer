var mongoose = require('mongoose')
var Schema = mongoose.Schema
var watchIpSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    ip: {
        type: String,
        required: true,
        unique: true
    }
})
var watchIpModel = mongoose.model('watchIp', watchIpSchema)
module.exports = watchIpModel