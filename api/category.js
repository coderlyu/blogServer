var categoryModel = require('../db/model/category')

// 新建一个分类
function createCategory(obj) {
    return new Promise((resolve, reject) => {
        categoryModel.create(obj, (err, data) => {
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}
// 获取分类的数量
function getCategoryNumber() {
    return new Promise((resolve, reject) => {
        categoryModel.find({}, (err, data) => {
            if (!err) {
                resolve(data.length)
            } else {
                reject(err)
            }
        })
    })
}
// 获取所有分类
function getCategoryList() {
    return new Promise((resolve, reject) => {
        categoryModel.find({}, (err, data) => {
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}

var categoryApi = {
    createCategory, getCategoryNumber, getCategoryList
}

module.exports = categoryApi