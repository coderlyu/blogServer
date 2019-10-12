const express = require('express');
const app = express();
const path = require('path')
const userRoute = require('./router/userRoute')
const articleRoute = require('./router/articleRoute')
const uploadRoute = require('./router/uploadRoute')

const db = require('./db/db')

var userInit = require('./initData/initUser')
var categoryInit = require('./initData/initCategory')
var articleInit = require('./initData/initArticle')

// 连接数据库之后的操作
db.then(() => {
    app.use(userRoute) // 跟用户有关的路由
    app.use(articleRoute) // 跟用户有关的路由
    app.use(uploadRoute) // 跟文件上传有关的路由
    app.use(express.static(path.join(__dirname, 'public'))) // 向外暴露静态资源
    // app.use('*', (req, res, next) => {
    //     res.header('Access-Control-Allow-Origin', '*')
    //     res.header('Access-Control-Allow-Headers', 'Content-Type')
    //     res.header('Access-Control-Allow-Methods', '*')
    //     res.header('Content-Type', 'application/json;charset=utf-8')
    //     next()
    // })
    // initData() // 数据初始化
    app.listen(3000, err => {
        if (!err) {
            console.log('server is running at http://localhost:3000')
            console.log('server is running at http://127.0.0.1:3000')
        } else {
            console.log(err)
        }
    })
    console.log('数据库连接成功')
}).catch(err => {
    console.log('数据库连接失败')
})

// 数据初始化
function initData() {
    userInit() // 用户初始化
    categoryInit() // 文章分类初始化
    articleInit() // 文章初始化
}
