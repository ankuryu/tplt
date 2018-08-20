/* JSHINT ES6 VERSION */
module.exports = (sequelize, DataTypes) => {
  const Invsize = sequelize.define('invsize',
	  {
	  id: { type: DataTypes.INTEGER,
		  primaryKey: true
      },
      lsize: DataTypes.STRING, 
      asize: DataTypes.STRING, 
      msize: DataTypes.STRING, 
    },
    { freezeTableName: true,
      timestamps: false
    }
  )
  return Invsize 
}
