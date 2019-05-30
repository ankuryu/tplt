/* JSHINT ES6 VERSION */
module.exports = (chqseq, DataTypes) => {
  const vndrmas = chqseq.define('vndrmas',
    {
      id: { type: DataTypes.INTEGER,
        primaryKey: true
      },
      Acname: DataTypes.STRING,
      ISFC: DataTypes.STRING,
      ACNO: DataTypes.STRING,
      addr: DataTypes.INTEGER,
      mbl: DataTypes.STRING,
      pan: DataTypes.STRING,
      gst: DataTypes.STRING,
      cperson: DataTypes.STRING,
      tel: DataTypes.STRING,
      email: DataTypes.STRING

    },
    { freezeTableName: true,
      timestamps: false
    }
  )
  return vndrmas 
}
