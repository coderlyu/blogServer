let express = require('express')
let router = new express.Router()
var bodyParser = require('body-parser')
// 引入操作数据库的api
var articleApi = require('../api/article')
var watchIpApi = require('../api/watchIp')
var commentApi = require('../api/comment')
// 引入工具
var tools = require('../utils/index')

const ARTICLE_NAME = 'article'
const ID_HEAD = '20190401' // 新建文章的头部id
const IP_HEAD = '401' // 新建ip的头部id

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

// 新建一篇文章
router.post(`/${ARTICLE_NAME}/createArticle`, async (req, res) => {
    // req.body
    var creteObj = req.body
    let result = {
        status: 0,
        data: [],
        count: '',
        msg: ''
    }
    try {
        let aNum = articleApi.getArticleNumber()
        creteObj.id = ID_HEAD + tools.PrefixZero((parseInt(aNum) + 1), 5)
        let newArticle = articleApi.createArticle(creteObj)
        result.count = newArticle.length
        result.data = newArticle
        result.msg = '数据插入成功'
    } catch (err) {
        result.status = 1
        result.msg = err
    }
    res.json(result)
})
// 通过id获取文章详情
router.get(`/${ARTICLE_NAME}/getDetailById`, async (req, res) => {
    var aid = null
    let uIp = tools.getIPAddress()
    if (req.query && req.query.id) {
        aid = req.query.id
    }
    let result = {
        status: 0,
        data: [],
        count: '',
        isLike: false,
        msg: ''
    }
    try {
        let ipId = null
        var findData = await articleApi.findArticleById(aid)
        if (findData) {
            ipId = await watchIpApi.findWatchIpByIP({ ip: uIp })
            if (ipId) {
                let isFind = findData.like_ip.findIndex((ele) => ele === ipId)
                if (isFind !== -1) {
                    result.isLike = true
                }
            }
            findData.watch = parseInt(findData.watch) + 1
            var aresult = await articleApi.updateArticle({ id: findData.id }, findData)
            if (aresult.ok === 1) {
                result.count = 1
                result.msg = '更新成功'
                result.data = findData
            }
        }
    } catch (err) {
        result.status = 1
        result.msg = err
    }
    res.json(result)
})
// 获取主页推荐
router.post(`/${ARTICLE_NAME}/getRecommend`, async (req, res) => {
    var queryObj = {
        show_flag: 1
    }
    queryObj = Object.assign(queryObj, req.body)
    let result = {
        status: 0,
        data: [],
        count: '',
        msg: ''
    }
    try {
        var recommendList = await articleApi.getArticleByPage(queryObj)
        result.data = recommendList
        result.msg = '查询成功'
        result.count = recommendList.length
    } catch (err) {
        result.status = 1
        result.msg = err
    }
    console.log(result)
    res.json(result)
})
// 通过分类id获取文章并且支持分页
router.post(`/${ARTICLE_NAME}/getAriticleByCate`, async (req, res) => {
    var queryObj = {
        category_id: 1
    }
    queryObj = Object.assign(queryObj, req.body)
    let result = {
        status: 0,
        data: [],
        count: '',
        msg: ''
    }
    try {
        var recommendList = await articleApi.getArticleByPage(queryObj)
        result.data = recommendList
        result.msg = '查询成功'
        result.count = recommendList.length
    } catch (err) {
        result.status = 1
        result.msg = err
    }
    res.json(result)
})
// 给文章点赞,接收一个文章的id
router.get(`/${ARTICLE_NAME}/addLike`, async (req, res) => {
    let aid = null
    let uIp = tools.getIPAddress()
    if (req.query.id) {
        aid = req.query.id
    }
    let result = {
        status: 0,
        data: [],
        count: '',
        msg: ''
    }
    try {
        let findArticle = await articleApi.findArticleById(aid) // 查询文章
        if (findArticle) {
            let findIp = await watchIpApi.findWatchIpByIP({ ip: uIp })
            let ipId = null
            if (!findIp) {
                let ipNum = await watchIpApi.getWatchIpNumber()
                ipId = IP_HEAD + tools.PrefixZero((ipNum + 1), 6)
                let t = await watchIpApi.addWatchIp({ id: ipId, ip: uIp })
                if (t) {
                    findArticle.like = parseInt(findArticle.like) + 1
                    let isFind = findArticle.like_ip.findIndex((ele) => ele === ipId)
                    if (isFind === -1) {
                        findArticle.like_ip.push(ipId)
                    }
                    let updataArticle = await articleApi.updateArticle({ id: aid }, findArticle) // 更新数据
                    if (updataArticle) {
                        result.count = updataArticle.length
                        result.data = updataArticle
                        result.msg = '点赞成功'
                    }
                }
            } else {
                findArticle.like = parseInt(findArticle.like) + 1
                let isFind = findArticle.like_ip.findIndex((ele) => ele === ipId)
                if (isFind === -1) {
                    findArticle.like_ip.push(ipId)
                }
                let updataArticle = await articleApi.updateArticle({ id: aid }, findArticle) // 更新数据
                if (updataArticle) {
                    result.count = updataArticle.length
                    result.data = updataArticle
                    result.msg = '点赞成功'
                }
            }
        }
    } catch (err) {
        result.status = 1
        result.msg = err
    }
    res.json(result)
})
// 根据文章id获取评论（支持分页）
router.post(`/${ARTICLE_NAME}/getCommentByArticleId`, async (req, res) => {
    let queryObj = {}
    queryObj = Object.assign(queryObj, req.body)
    let result = {
        status: 0,
        data: [],
        count: '',
        msg: ''
    }
    try {
        let comments = await commentApi.getCommentByIdAndPage(queryObj)
        if (comments) {
            result.data = comments
            result.msg = '查询成功'
            result.count = data.length
        }
    } catch (err) {
        result.status = 1
        result.msg = err
    }
    res.json(result)
})
module.exports = router