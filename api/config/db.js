import mysql from "mysql2";

export const connectDB = () => {
  try {
    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "nabindb",
    });

    connection.connect();
    console.log("connection established ✅✅");
  } catch (error) {
    console.log("Something went wrong");
  }
};
