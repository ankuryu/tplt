/* JSHINT ES6 VERSION */
module.exports = (sequelize, DataTypes) => {
  const Quotop = sequelize.define('quotop',
	  {
	  id: { type: DataTypes.INTEGER,
		  primaryKey: true
	  },
      qno: DataTypes.STRING,
      qdt: DataTypes.STRING,
      pname: DataTypes.STRING,
      paddr: DataTypes.STRING,
      enqno: DataTypes.STRING,
      enqdt: DataTypes.STRING,
      tel: DataTypes.STRING,
      email: DataTypes.TEXT,
      contact: DataTypes.TEXT
    },
    { freezeTableName: true,
      timestamps: false
    }
  )
  return Quotop
}
