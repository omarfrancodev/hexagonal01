import { Pool } from "pg";

const config = {
  host: "localhost",
  port: 5432,
  user: "postgres",
  database: "notes",
  password: "omar_2803",
};

export const pool = new Pool(config);