var articleModel = require('../db/model/article')

// 新建一篇文章
function createArticle(createObj) {
    return new Promise((resolve, reject) => {
        articleModel.create(createObj, (err, data) => {
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}
// 通过id查询一篇文章
function findArticleById(id) {
    return new Promise((resolve, reject) => {
        articleModel.findOne({ id }, (err, data) => {
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}
// 通过更新一篇文章
function updateArticle(oldObj, updateObj) {
    return new Promise((resolve, reject) => {
        articleModel.updateOne(oldObj, updateObj, (err, data) => {
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}
// 文章可分页(可获取主页推荐)
function getArticleByPage(findObj) {
    let queryObj = {
        page: 1,
        number: 10
    }
    queryObj = Object.assign(queryObj, findObj)
    let page = parseInt(queryObj.page)
    let number = parseInt(queryObj.number)
    delete queryObj.page
    delete queryObj.number
    return new Promise((resolve, reject) => {
        articleModel.find(queryObj, (err, data) => {
            if (!err) {
                var newData = data.splice((page - 1) * number, number)
                resolve(newData)
            } else {
                reject(err)
            }
        })
    })
}
// 文章个数
function getArticleNumber() {
    return new Promise((resolve, reject) => {
        articleModel.find({}, (err, data) => {
            if (!err) {
                resolve(data.length)
            } else {
                reject(err)
            }
        })
    })
}

var articleApi = {
    createArticle, findArticleById, getArticleByPage, getArticleNumber, updateArticle
}
module.exports = articleApi