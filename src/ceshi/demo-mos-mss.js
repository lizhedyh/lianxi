var MSS = require('mos-mss');

var client = new MSS({
    accessKeyId: 'd7c6b34b7fc043a2b27a252cb21c42e8', /* required */
    accessKeySecret: 'ec440a2f618e445ca758123f588bc706', /* required */
    endpoint: 's3plus.meituan.net', /* required */
    bucket: 'canary-ceshi'
});

var result = client.getBucketACL('canary-ceshi');
result.then(function (res) {
    console.log(res);
});