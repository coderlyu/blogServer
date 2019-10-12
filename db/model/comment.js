var mongoose = require('mongoose')
var Schema = mongoose.Schema
var commentSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    article_id: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: ''
    },
    nickname: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    user_ip: [String]
})
var commentModel = mongoose.model('comment', commentSchema)
module.exports = commentModel