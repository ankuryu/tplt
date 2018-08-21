/* JSHINT ES6 VERSION */
module.exports = (ttyseq, DataTypes) => {
  const Contact = ttyseq.define('contact',
	  {
	  id: { type: DataTypes.INTEGER,
		  primaryKey: true
	  },
      name: DataTypes.INTEGER,
      addrStrt: DataTypes.STRING,
      addrCty: DataTypes.STRING,
      addrPin: DataTypes.INTEGER,
      gstin: DataTypes.STRING,
      ccode: DataTypes.STRING,
      pan: DataTypes.STRING,
      cperson: DataTypes.STRING,
      tel: DataTypes.STRING,
      email: DataTypes.STRING

    },
    { freezeTableName: true,
      timestamps: false
    }
  )
  return Contact 
}
