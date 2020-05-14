var mm = require('./mymodule.js')
mm.hello_world()
mm.good_bye();
console.log(mm); 
jj =  mm.create_greeter("de")
console.log("jj")
console.log(jj)
jj.language = 'en'
console.log("ooh")
console.log(jj.greet('jp'))
