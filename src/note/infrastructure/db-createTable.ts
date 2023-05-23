import { pool } from "./db-connection";

export const createTable = () => {
  pool.query(
      `CREATE TABLE IF NOT EXISTS notes (ID SERIAL PRIMARY KEY,  title VARCHAR(50), body VARCHAR(200));
        DO $$
        BEGIN
            IF NOT EXISTS (SELECT 1 FROM notes) THEN
                INSERT INTO notes (title, body) VALUES ('Test1', 'This is a test');
            END IF;
        END $$
        `,
      (error, results) => {
        if (error) {
          throw error;
        }
        console.log("Table created or already exists");
      }
    );
  };  