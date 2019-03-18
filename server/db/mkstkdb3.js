const Sequelize = require('sequelize')
const seqstk = new Sequelize({dialect:'sqlite',storage: 'stk19.db3'});
const DataTypes = Sequelize.Datatypes;
const stock = seqstk.define('stock',{
  id: { type: Sequelize.INTEGER,
    primaryKey: true
  },
  mfg: Sequelize.TEXT,
  icode: Sequelize.STRING,
  asize: Sequelize.STRING,
  qty: Sequelize.INTEGER,
  pg: Sequelize.INTEGER,
  loc: Sequelize.STRING,
  dt: Sequelize.STRING},
  { freezeTableName: true,
    timestamps: false
  }
)
seqstk.sync().then(()=>
  {stock.create({
    mfg:"LDR",
    icode:"GATCL1",
    asize:"D",
    qty:13,
    pg:1,
    loc:"AB1",
    dt:"2019-03-19"
  })
  })
