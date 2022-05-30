import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

const user = "postgres";
const password = "admin";
const host = "localhost";
const port = 5432;
const database = "BoardCamp";

const db = new Pool({
  user,
  password,
  host,
  port,
  database,
});

export default db;
