var userModel = require('../db/model/user')

// 添加一个用户
function createdUser(user) {
    return new Promise((resolve, reject) => {
        userModel.create(user, (err, data) => {
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}
// 获取用户数量
function findUserNumber() {
    return new Promise((resolve, reject) => {
        userModel.find({}, (err, data) => {
            if (!err) {
                resolve(data.length)
            } else {
                reject(err)
            }
        })
    })
}
// 获取全部用户列表
function findUserList() {
    return new Promise((resolve, reject) => {
        userModel.find({}, (err, data) => {
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}
var userApi = {
    createdUser, findUserNumber, findUserList
}
module.exports = userApi