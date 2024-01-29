const { Sequelize, DataTypes } = require("sequelize");

//database connection
const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
  username: process.env.DB_USER || "your_username",
  password: process.env.DB_PASSWORD || "your_password",
  database: process.env.DB_NAME || "your_database",
});

//checking if connection is done
sequelize
  .authenticate()
  .then(() => {
    console.log(`Database connected to discover`);
  })
  .catch((err) => {
    console.log(err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//connecting to model
db.users = require("../models/userModel")(sequelize, DataTypes);
db.roles = require("../models/rolesModel")(sequelize, DataTypes);
db.schedules = require("../models/daily_schedule")(sequelize, DataTypes);

//exporting the module
module.exports = db;
