const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  database: env.database, 
  username: env.username, 
  password: env.password,
  host: env.host,
  port: env.port,
  dialect: env.dialect,
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false // This line will fix new error
    }
  },
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 

//Models/tables
db.customers = require('../model/customer.model.js')(sequelize, Sequelize);
 
 
module.exports = db;