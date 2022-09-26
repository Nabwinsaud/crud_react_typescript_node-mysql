import mysql from "mysql2";
const connect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "nabindb",
});

export default connect;
