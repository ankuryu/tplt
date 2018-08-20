/* JSHINT ES6 VERSION */
module.exports = (salseq, DataTypes) => {
  const Quotop = salseq.define('Ldrpri',
	  {
	  id: { type: DataTypes.INTEGER,
		  primaryKey: true
	  },
   },
    { freezeTableName: true,
      timestamps: false
    }
  )
  return Ldrpri
}
