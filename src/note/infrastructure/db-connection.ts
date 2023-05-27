import { Pool } from "pg";

const config = {
  host: "localhost",
  port: 5432,
  user: "postgres",
  database: "nodejs-soa",
  password: "PassAlanGG",
};

export const pool = new Pool(config);