/* JSHINT ES6 VERSION */
module.exports = (salseq, DataTypes) => {
  const Invname = salseq.define('invname',
    {
      id: { type: DataTypes.INTEGER,
        primaryKey: true
      },
      lcode: DataTypes.STRING,
      icode: DataTypes.STRING,
      desc: DataTypes.STRING,
      ddesc: DataTypes.STRING
    },
    { freezeTableName: true,
      timestamps: false
    }
  )
  return Invname
}
