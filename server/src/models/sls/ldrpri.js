/* JSHINT ES6 VERSION */
module.exports = (salseq, DataTypes) => {
  const ldrpri = salseq.define('ldrpri',
	  {
	  id: { type: DataTypes.INTEGER,
		  primaryKey: true
      },
      lcode: DataTypes.STRING,
      lsize: DataTypes.STRING,
      mmSize: DataTypes.STRING,
      rate: DataTypes.INTEGER,
      asize: DataTypes.STRING,
      icode: DataTypes.STRING,
      mrp: DataTypes.INTEGER
    },
    { freezeTableName: true,
      timestamps: false
    }
  )
  return ldrpri
}
