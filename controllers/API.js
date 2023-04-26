var request = require('request');
let res=null
function getSettings(s) {
return new Promise(function (resolve,reject) {
    request('api end point', {json: true}, function (error, response, body) {
        res = body.data[0]
        resolve(res[s])
    })
})
}
module.exports={getSettings}
