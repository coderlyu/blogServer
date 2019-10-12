
var userModel = require('../db/model/user')
initusers = [
    {
        id: '2019100500001',
        name: 'coderly',
        password: 'coderly',
        avatar: '这是一个头像',
        info: '我是管理员',
        email: '974257574@qq.com',
        qq: '974257574',
        github: 'https://github.com/974257574',
        motto: '努力努力再努力...',
        flags: 2,
    }, {
        id: '2019100500002',
        name: 'mangyui',
        avatar: '这是一个头像',
        info: '他是mangyui',
        email: '',
        qq: '',
        github: 'https://github.com/mangyui',
        motto: '',
        flags: 1,
    }, {
        id: '2019100500003',
        name: 'goodtimep',
        avatar: '这是一个头像',
        info: '他是goodtimep',
        email: '',
        qq: '',
        github: 'https://github.com/goodtimep',
        motto: '',
        flags: 1,
    }, {
        id: '2019100500004',
        name: 'ipsozzZ',
        avatar: '这是一个头像',
        info: '他是ipsozzZ',
        email: '',
        qq: '',
        github: 'https://github.com/ipsozzZ',
        motto: '',
        flags: 1,
    }
]
module.exports = function () {
    try {
        userModel.collection.insert(initusers, (err, data) => {
            if (!err) {
                console.log('用户初始化完成')
            } else {
                console.log(err)
            }
        })
    } catch (err) {
        console.log(err)
    }
}
