let express = require('express')
let router = new express.Router()
var bodyParser = require('body-parser')
var userModel = require('../db/model/user')
// 引入操作数据库的api
var userApi = require('../api/user')
// 引入工具
var tools = require('../utils/index')

const USER_NAME = 'user'
const ID_HEAD = '20191005'

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
// 获取全部用户列表
router.get(`/${USER_NAME}/getAllList`, async (req, res) => {
    let result = {
        status: 0,
        data: [],
        count: '',
        msg: ''
    }
    try {
        result.data = await userApi.findUserList()
        result.count = result.data.length
        result.msg = '查询成功'
    } catch (err) {
        result.status = 1
        result.msg = err
    }
    res.json(result)
})
// create一个用户
router.post(`/${USER_NAME}/createUser`, async (req, res) => {
    let result = {
        status: 0,
        data: [],
        count: '',
        msg: ''
    }
    try {
        var userNumber = await userApi.findUserNumber() + 1
        var obj = {
            id: ID_HEAD + tools.PrefixZero(userNumber, 5)
        }
        var user = Object.assign(obj, req.body)
        await userApi.createdUser(user).then(data => {
            result.data = data
            result.count = data.length
            result.msg = '数据插入成功'
        }).catch(err => {
            result.status = 1
            result.msg = err
        })
    } catch (err) {
        result.status = 1
        result.msg = err
    }
    res.json(result)
})
module.exports = router