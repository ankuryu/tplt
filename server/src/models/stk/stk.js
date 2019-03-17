/* JSHINT ES6 VERSION */
module.exports = (stkseq, DataTypes) => {
  const stk = stkseq.define('stock',
	  {
	  id: { type: DataTypes.INTEGER,
		  primaryKey: true
      },
      mfg: DataTypes.STRING,
      icode: DataTypes.STRING,
      asize: DataTypes.STRING,
      qty: DataTypes.INTEGER,
      page: DataTypes.INTEGER,
      loc: DataTypes.STRING,
      dt: DataTypes.STRING
    },
    { freezeTableName: true,
      timestamps: false
    }
  )
  return stk
}
