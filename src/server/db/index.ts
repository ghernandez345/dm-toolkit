import mysql from "mysql";

export const createDatabase = () => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dm_toolkit",
  });

  return connection;
};
