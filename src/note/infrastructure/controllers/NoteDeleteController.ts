import { Request, Response } from "express";

import { DeleteNoteUseCase } from "../../application/DeleteNoteUseCase";

export class NoteDeleteController {
  constructor(readonly noteDelete: DeleteNoteUseCase) {}

  async run(req: Request, res: Response) {
    const noteId = Number(req.params.id);

    const note = await this.noteDelete.run(noteId);
    res.status(200).json(note);
  }
}
