
function component() {
  var  element = document.createElement('pre');
  
  element.innerHTML = [
    'Hi Stark 222!'
  ].join('\n\n');
  return element;
}

let element = component(); 
document.body.appendChild(element);
//---------------------------
// var MSS = require('mss-sdk');
// //实例化,当前实例生效:
// var s3 = new MSS.S3({
//   accessKeyId: KEY.access_key,
//   secretAccessKey: KEY.secret_key,
//   params:{
//     Bucket: KEY.bucket_name + "1"
//   }
// });

// s3.createBucket(function() {
//   var data = {Key: 'Hello', Body: 'Word!'};
//   s3.putObject(data, function(err, data) {
//     if (err) {
//       console.log("Error uploading data: ", err);
//     } else {
//       console.log("Successfully uploaded data to %s/Hello", KEY.bucket_name);
//     }
//   });
// });

// var btn = document.getElementsByClassName('mybutton');
// btn.onclick = function(){
//   //s3.createBucket();
// };

