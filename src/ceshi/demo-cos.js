// 引入模块
var COS = require('cos-nodejs-sdk-v5');
// 创建实例
var cos = new COS({
    SecretId: 'AKIDQfjcw9J2kHguzebOUSFqJk6HKBtRt2mR',
    SecretKey: 'gCWhhV487vYzHOJ6UnwtfIku5rRuIE2e',
});
// 分片上传
cos.sliceUploadFile({
    Bucket: 'lizhe-1300719940', // Bucket 格式：test-1250000000
    Region: 'ap-beijing',
    Key: 'index.js',
    FilePath: './index.js'
}, function (err, data) {
    console.log(err, data);
});
