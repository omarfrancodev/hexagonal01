import { Request, Response } from "express";

import { CreateNoteUseCase } from "../../application/CreateNoteUseCase";
import { Note } from "../../domain/Note";

export class CreateNoteController {
  constructor(readonly createNoteUseCase: CreateNoteUseCase) {}

  async run(req: Request, res: Response) {
    const noteContent = req.body;
    try {
      const note = await this.createNoteUseCase.run(
        new Note(noteContent.id, noteContent.title, noteContent.body));
      res.status(201).json(note);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
