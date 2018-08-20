/* JSHINT ES6 VERSION */
module.exports = (sequelize, DataTypes) => {
  const Quotop = sequelize.define('quotop',
	  {
	  id: { type: DataTypes.INTEGER,
		  primaryKey: true
	  },
   },
    { freezeTableName: true,
      timestamps: false
    }
  )
  return Quotop
}
