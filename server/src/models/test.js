const fs = require('fs')
const path = require('path')

let j = fs.readdirSync(path.join(__dirname + '/sls'))
let k =	j.filter((file) => path.extname(file) -== '.js')

console.log(j, k)
for (var i = 0; i < j.length; i++) {
  console.log(j[i], path.extname(j[i], k[i]))
}
