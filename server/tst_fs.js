var fs = require('fs')
let fname = "tmp.txt"


do_it('tmp.txt')



function open_file(fn){
  return fspromises.open(fn)
}
async function write_it(){

  await open_file(fn)

}
function do_it(fn){
  console.log("Opeinging file "+fn)
  f2 = fs.createWriteStream(fn)
  for(i=1;i<101;i++){
    f2.write("\nThis is line "+i)
  }
  f2.end();
  /*
  fs.open(fn,'w')
    .then((fh)=>{fh.write("Hello World");console.log("hello world")})
    .then((fh)=>{fh.write("More writing ");console.log("More writing")})
    .then((fh)=>{}).then((fh)=>{fh.close();console.log("closing")})
    .then((st)=>{console.log("Over")})
    .catch((e)=>{ console.log("Error occured",e) })
    */
}
