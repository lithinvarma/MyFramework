/*
var fs = require('fs');
var path = require('path');
console.log(__dirname);
/!*var jsonPath = path.join(__dirname, '..', 'config', 'dev', 'foobar.json');
var jsonString = fs.readFileSync(jsonPath, 'utf8');*!/
const os = require('os');
// Printing os.homedir() value
console.log(os.homedir());


var s ="c,5,6,7"


var x=""
console.log(s.replaceAll(",", "\",\""))

*/

function getSumNum(a, b) {
    const customPromise = new Promise((resolve, reject) => {
        const sum = a + b;

        if(sum <= 5){
            resolve("Let's go!!")
        } else {
            reject(new Error('Oops!.. Number must be less than 5'))
        }
    })

    return customPromise
}

getSumNum(1,2).then()
