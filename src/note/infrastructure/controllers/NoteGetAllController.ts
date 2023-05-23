import { Request, Response } from "express";

import { NoteGetAllUseCase } from "../../application/NoteGetAllUseCase";

export class NoteGetAllController {
  constructor(readonly noteGetAllUseCase: NoteGetAllUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const noteList = await this.noteGetAllUseCase.run();
      res.status(200).json(noteList);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
