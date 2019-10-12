const watchIpModel = require('../db/model/watchIp')

// 通过用户登录ip添加一个watchIp
function addWatchIp(addObj) {
    return new Promise((resolve, reject) => {
        watchIpModel.create(addObj, (err, data) => {
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}

// 通过用户登录id查询watchIp信息
function findWatchIpById(findObj) {
    return new Promise((resolve, reject) => {
        watchIpModel.findOne(findObj, (err, data) => {
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}
// 通过用户登录ip查询是否有watchIp信息
function findWatchIpByIP(findObj) {
    return new Promise((resolve, reject) => {
        watchIpModel.findOne(findObj, (err, data) => {
            if (!err) {
                // resolve(data)
                if (data) {
                    resolve(true)
                } else {
                    resolve(false)
                }
            } else {
                reject(err)
            }
        })
    })
}
// 获取ip数量
function getWatchIpNumber() {
    return new Promise((resolve, reject) => {
        watchIpModel.find({}, (err, data) => {
            if (!err) {
                resolve(data.length)
            } else {
                reject(err)
            }
        })
    })
}
var watchIpApi = {
    addWatchIp, findWatchIpById, findWatchIpByIP, getWatchIpNumber
}
module.exports = watchIpApi