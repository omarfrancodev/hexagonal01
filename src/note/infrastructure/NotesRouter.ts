import express from "express";

import {
  createNoteController,
  noteGetAllController,
  noteGetByIdController,
  deleteNoteController,
  updateNoteController
} from "./dependencies";

export const noteRouter = express.Router();

noteRouter.post("/create", createNoteController.run.bind(createNoteController));
noteRouter.get("/", noteGetAllController.run.bind(noteGetAllController));
noteRouter.get("/:id", noteGetByIdController.run.bind(noteGetByIdController));
noteRouter.delete("/:id", deleteNoteController.run.bind(deleteNoteController));
noteRouter.put("/", updateNoteController.run.bind(updateNoteController));