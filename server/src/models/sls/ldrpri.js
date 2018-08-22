/* JSHINT ES6 VERSION */
module.exports = (salseq, DataTypes) => {
  const Ldrpri = salseq.define('ldrpri',
	  {
	  id: { type: DataTypes.INTEGER,
		  primaryKey: true
      },
      Lcode: DataTypes.STRING,
      Lsize: DataTypes.STRING,
      mmSize: DataTypes.STRING,
      Rate: DataTypes.INTEGER,
      asize: DataTypes.STRING,
      icode: DataTypes.STRING,
      mrp: DataTypes.INTEGER
    },
    { freezeTableName: true,
      timestamps: false
    }
  )
  return Ldrpri
}
