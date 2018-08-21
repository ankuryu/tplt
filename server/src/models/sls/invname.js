/* JSHINT ES6 VERSION */
export default (salseq, DataTypes) => {
  const Invname = salseq.define('quotop',
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
