import mysql from "mysql2/promise";

const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbName = process.env.DB_NAME;
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

const dbConfig = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "rusalangit_gis",
};

const pool = mysql.createPool(dbConfig);

export default pool;
