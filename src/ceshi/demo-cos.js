// 引入模块
var COS = require('cos-nodejs-sdk-v5');
// 创建实例
var cos = new COS({
    SecretId: 'AKIDQfjcw9J2kHguzebOUSFqJk6HKBtRt2mR',
    SecretKey: 'gCWhhV487vYzHOJ6UnwtfIku5rRuIE2e',
});
var url = cos.getObjectUrl({
    Bucket: 'lizhe-1300719940',
    Region: 'ap-beijing',
    Key: 'index.js',
    Sign: false
});
console.log(url);