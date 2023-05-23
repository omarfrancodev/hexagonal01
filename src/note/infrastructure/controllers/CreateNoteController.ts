import { Request, Response } from "express";

import { CreateNoteUseCase } from "../../application/CreateNoteUseCase";
import { Note } from "../../domain/Note";

export class CreateNoteController {
  constructor(readonly createNoteUseCase: CreateNoteUseCase) { }

  async run(req: Request, res: Response) {
    const noteContent = req.body;

    const note = await this.createNoteUseCase.run(
      new Note(0, noteContent.title, noteContent.body)
    );
    res.status(201).json(note);
  }
}
