var mongoose = require('mongoose')
var Schema = mongoose.Schema
var articleSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true // 唯一性
    },
    title: {
        type: String,
        required: true
    },
    category_id: {
        type: String
    },
    picture: {
        type: String,
        required: true
    },
    describe: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    create_time: {
        type: Date,
        default: Date.now // 创建时间
    },
    like: {
        type: Number,
        default: 0  // 收藏信息
    },
    like_ip: [Number], //记录点赞的ip，记录的是id，数组形式
    watch: {
        type: Number,
        default: 0
    },
    delete_flag: {
        type: Number,
        default: 1 // 是否删除该条，0为删除，1为不删除
    },
    show_flag: {
        type: Number,
        default: 0 // 是否加入主页推荐，0未不推荐该条，1为推荐该条
    }
})
var articleModel = mongoose.model('article', articleSchema)
module.exports = articleModel