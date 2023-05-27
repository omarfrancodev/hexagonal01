import { Request, Response } from "express";

import { NoteUpdateUseCase } from "../../application/NoteUpdateUseCase";
import { Note } from "../../domain/Note";

export class NoteUpdateController {
  constructor(readonly noteUpdateUseCase: NoteUpdateUseCase) { }

  async run(req: Request, res: Response) {
    const noteContent = req.body;

    const note = await this.noteUpdateUseCase.run(
      new Note(noteContent.id, noteContent.title, noteContent.body)
    );
    res.status(201).json(note);
  }
}
