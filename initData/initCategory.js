
var categoryModel = require('../db/model/category')
initcategory = [
    {
        id: '2019001',
        name: 'nodeJS',
        intro: 'nodeJS心得'
    }, {
        id: '2019002',
        name: 'vueJS',
        intro: 'vueJS心得'
    }, {
        id: '2019003',
        name: 'webpack',
        intro: 'webpack心得'
    }, {
        id: '2019004',
        name: '计算机网络',
        intro: '计算机网络心得'
    }, {
        id: '2019005',
        name: '性能优化',
        intro: '前端性能优化心得'
    }, {
        id: '2019006',
        name: 'CSS&HTML&JS',
        intro: 'CSS&HTML&JS心得'
    }, {
        id: '2019007',
        name: '其它',
        intro: '其它的心得'
    }
]
module.exports = function () {
    try {
        categoryModel.collection.insert(initcategory, (err, data) => {
            if (!err) {
                console.log('文章分类初始化完成')
            } else {
                console.log(err)
            }
        })
    } catch (err) {
        console.log(err)
    }
}
