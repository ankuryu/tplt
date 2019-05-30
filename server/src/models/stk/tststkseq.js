const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

stkseq = new Sequelize({dialect:'sqlite',storage:'d:/Projects/tplt/server/db/tmpstk.db3'})


stkseq
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
stkseq.authenticate().then( ()=>{
tbl1 = stkseq.import('stk.js')
tbl2 = stkseq.import('../chq/vndrmas.js');
  stkseq.sync();

console.log("table : ",tbl1);
  

})
