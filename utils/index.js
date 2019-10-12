/**
* 自定义函数名：PrefixZero
* @param num： 被操作数
* @param n： 固定的总位数
*/
function PrefixZero(num, n) {
    return (Array(n).join(0) + num).slice(-n);
}
// 获取访问者的ip
function getIPAddress() {
    var interfaces = require('os').networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}
//获取时间作为上传文件名的唯一标识,在时间的基础上再在最后加上随机生成的一串数字
function getNowFormatDate() {
    var date = new Date()
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var strDate = date.getDate()
    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()
    month = month < 10 ? '0' + month : month
    strDate = strDate < 10 ? '0' + strDate : strDate
    hour = hour < 10 ? '0' + hour : hour
    minute = minute < 10 ? '0' + minute : minute
    second = second < 10 ? '0' + second : second
    var currentdate = year.toString() + month.toString() + strDate.toString() + hour.toString() + minute.toString() + second.toString()
    var endId = currentdate.toString() + PrefixZero(parseInt(Math.random() * 10000), 5).toString()
    return endId
}
module.exports = {
    PrefixZero, getIPAddress, getNowFormatDate
}