/* JSHINT ES6 VERSION */
module.exports = (salseq, DataTypes) => {
  const Invsize = salseq.define('invsize',
	  {
	  id: { type: DataTypes.INTEGER,
		  primaryKey: true
      },
      lsize: DataTypes.STRING,
      asize: DataTypes.STRING,
      msize: DataTypes.STRING
    },
    { freezeTableName: true,
      timestamps: false
    }
  )
  return Invsize
}
