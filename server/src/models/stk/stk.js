/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* JSHINT ES6 VERSION */
module.exports = (stkseq, DataTypes) => {
  const stock = stkseq.define('stock',
	  {
	  id: { type: DataTypes.INTEGER,
		  primaryKey: true
      },
      mfg: DataTypes.STRING,
      icode: DataTypes.STRING,
      asize: DataTypes.STRING,
      qty: DataTypes.INTEGER,
      pg: DataTypes.INTEGER,
      loc: DataTypes.STRING,
      dt: DataTypes.STRING
    },
    { freezeTableName: true,
      timestamps: false
    }
  )
  return stock
}
