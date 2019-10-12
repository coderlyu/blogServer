var express = require('express')
var multer = require('multer') // 文件上传
var tools = require('../utils/index') // 工具
var router = new express.Router()

var baseUrl = 'http://localhost:3000/'
var imgUrl = 'public/uploads/'
var imgUrlForJson = 'uploads/'
var dateNow = tools.getNowFormatDate()
var storage = multer.diskStorage({
    // 如果你提供的 destination 是一个函数，你需要负责创建文件夹
    destination: imgUrl,
    //给上传文件重命名，获取添加后缀名
    filename: function (req, file, cb) {
        cb(null, dateNow + file.originalname)
    }
})
var upload = multer({
    storage: storage
})
router.post('/upload', upload.any(), function (req, res, next) {
    console.log(req.body) //console.log(req.query.picTitle);
    console.log(req.files) //req.file文件的具体信息
    console.log(req.files[0].originalname) //上传文件的名字信息
    res.json({
        status: 0,
        data: baseUrl + imgUrlForJson + dateNow + req.files[0].originalname,
        count: 1,
        msg: '上传成功'
    });

})
// 导出
module.exports = router