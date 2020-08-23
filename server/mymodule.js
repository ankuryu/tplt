// file  mymodule.js
//
exports.hello_world = function () { 
  this.greet = 'Hello'
  console.log(this.greet + " World")
}
exports.good_bye = function() {
  console.log("Good Bye Cruel World")
}

function Greeter (lang) { 
  this.language = lang; 
  this.greet = function (ln) {
    this.language = ln ;
    switch (this.language) {
      case "en": return "Hello!"; 
      case "de": return "Hyllo!"; 
      case "jp": return " !"; 
      default: return "No speaka that language"; 
    } 
  } 
}

exports.create_greeter = function (lang) {
  return new Greeter(lang);
}
