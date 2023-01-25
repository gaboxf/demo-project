import { createPool } from "mysql2/promise";

// Con este pool podremos ejecutar consultas a la base de datos

// crear pool de conexiones a la base de datos

export const pool = createPool({
  host: "localhost", // -p en el terminal para ver el puerto de mysql
  port: 3306,
  user: "root",
  password: "123456",
  database: "taskdb",
});
