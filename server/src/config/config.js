const path = require('path')

module.exports = {
  port: process.env.PORT || 8000,
  user: process.env.DB_USER || 'user',
  password: process.env.DB_PASS || 'user123',
  sls: {
    db: {
      database: process.env.DB_NAME || 'sls.db3',
     options: {
        dialect: process.env.DIALECT || 'sqlite',
        host: process.env.HOST || 'localhost',
        storage: path.resolve(__dirname, '../../db/sls.db3')
      }
    }
  },
  tty: {
    db: {
      database: process.env.DB_NAME || 'ttly.db3',
      options: {
        dialect: process.env.DIALECT || 'sqlite',
        host: process.env.HOST || 'localhost',
        storage: path.resolve(__dirname, '../../db/ttly.db3')
      }
    }
  },
  stk: {
    db: {
      database: process.env.DB_NAME || 'stk.db3',
      options: {
        dialect: process.env.DIALECT || 'sqlite',
        host: process.env.HOST || 'localhost',
        storage: path.resolve(__dirname, '../../db/stk19.db3')
      }
    }
  }
  /*,
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  } */

}
