import express from "express";

import { noteRouter } from "./note/infrastructure/NotesRouter";
import { userRouter } from "./user/infrastructure/UserRouter";

const app = express();

app.use("/users", userRouter);
app.use("/notes", noteRouter);

app.listen(3000, () => {
  console.log(`[Application] Server online in port 3000`);
});
