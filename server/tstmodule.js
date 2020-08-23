var mm = require('./mymodule.js')
mm.hello_world()
mm.good_bye();
console.log(mm); 
jj =  mm.create_greeter("de")
console.log("jj")
jj.language = 'jp'
console.log(jj.language)
console.log("ooh")
 var rv =  jj.greet("tn")
console.log("return ",rv)
console.log(jj.greet("en"))
jj.greet.language = "jp"
console.log(jj.greet("de"))
