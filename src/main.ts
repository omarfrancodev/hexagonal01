import express from "express";

import { noteRouter } from "./note/infrastructure/NotesRouter";
import { userRouter } from "./user/infrastructure/UserRouter";

const db = require('./note/infrastructure/db-createTable');

const app = express();

db.createTable();

app.use("/users", userRouter);
app.use("/notes", noteRouter);

app.listen(3000, () => {
  console.log(`[Application] Server online in port 3000`);
});
