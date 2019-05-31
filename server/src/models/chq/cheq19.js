/* JSHINT ES6 VERSION */
module.exports = (chqseq, DataTypes) => {
  const cheq19 = chqseq.define('cheq19',
    {
      id: { type: DataTypes.INTEGER,
        primaryKey: true
      },
      co: DataTypes.STRING,
      name: DataTypes.STRING,
      amt: DataTypes.INTEGER,
      dt: DataTypes.STRING,
      bnk: DataTypes.STRING,
      chqno: DataTypes.STRING,
      nar: DataTypes.STRING,
      voutxt: DataTypes.STRING,
      vouno: DataTypes.INTEGER,
      db_ac: DataTypes.STRING,
      apflg: DataTypes.STRING,
      brflg: DataTypes.STRING,
      pflg: DataTypes.STRING,
      pdflg: DataTypes.STRING,
      novr: DataTypes.STRING

    },
    { freezeTableName: true,
      timestamps: false
    }
  );
  return cheq19;
};
