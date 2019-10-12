var commentModel = require('../db/model/comment')

// 新建一个评论
function createComment(obj) {
    return new Promise((resolve, reject) => {
        commentModel.create(obj, (err, data) => {
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}
// 获取评论的数量
function getCommentNumber() {
    return new Promise((resolve, reject) => {
        commentModel.find({}, (err, data) => {
            if (!err) {
                resolve(data.length)
            } else {
                reject(err)
            }
        })
    })
}
// 获取所有评论
function getCommentList() {
    return new Promise((resolve, reject) => {
        commentModel.find({}, (err, data) => {
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}
// 根据文章id获取评论信息（可分页）
function getCommentByIdAndPage(findObj) {
    let queryObj = {
        page: 1,
        number: 2
    }
    queryObj = Object.assign(queryObj, findObj)
    let page = parseInt(queryObj.page)
    let number = parseInt(queryObj.number)
    delete queryObj.page
    delete queryObj.number
    return new Promise((resolve, reject) => {
        commentModel.find(queryObj, (err, data) => {
            if (!err) {
                var newData = data.splice((page - 1) * number, number)
                resolve(newData)
            } else {
                reject(err)
            }
        })
    })
}

var categoryApi = {
    getCommentList, getCommentNumber, createComment, getCommentByIdAndPage
}

module.exports = categoryApi