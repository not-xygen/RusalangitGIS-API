import mysql from "mysql2/promise";

const dbConfig = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "rusalangit_gis",
};

const pool = mysql.createPool(dbConfig);

export default pool;
