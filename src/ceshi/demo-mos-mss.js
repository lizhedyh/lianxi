var MSS = require('mos-mss');
var path = require('path');

var client = new MSS({
    accessKeyId: 'd7c6b34b7fc043a2b27a252cb21c42e8', /* required */
    accessKeySecret: 'ec440a2f618e445ca758123f588bc706', /* required */
    endpoint: 's3plus.meituan.net', /* required */
    bucket: 'canary-ceshi'
});

var result = client.getObject('style.css', path.join(__dirname, './style.css'));

result.then(function(data) {
    console.log(data);
});
// var filePath = path.join(__dirname, './style.css');
// var result = client.putObject('style.css', filePath,{
//     headers:{
//         'Cache-Control': 'max-age=31536000'
//     }
// });
 
// result.then(function (res) {
//     console.log(res);
// });