import { Request, Response } from "express";

import { NoteGetByIdUseCase } from "../../application/NoteGetByIdUseCase";

export class NoteGetbyIdController {
  constructor(readonly noteById: NoteGetByIdUseCase) {}

  async run(req: Request, res: Response) {
    const noteId = req.params.id;
    
      const note = await this.noteById.run(noteId);
      res.status(200).json(note);
  }
}
