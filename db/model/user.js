var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    id: {
        type: String, // 学号类型为字符串
        required: true, // 限制该项为必填项
        unique: true // 限制学号是唯一的
    },
    password: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: false
    },
    info: {
        type: Schema.Types.Mixed // 接收所有数据类型
    },
    data: {
        type: Date,
        default: Date.now()
    },
    email: {
        type: String
    },
    qq: {
        type: String
    },
    github: {
        type: String
    },
    motto: {
        type: String
    },
    flags: {
        type: Number,
        default: 1 // 1 为友链，2为管理员
    }
})

var userModel = mongoose.model('user', userSchema)
module.exports = userModel