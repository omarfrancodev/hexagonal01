import { NoteGetByIdRepository } from "../domain/NoteRepository";

export class NoteGetByIdUseCase {
  constructor(readonly noteGetByIdRepository: NoteGetByIdRepository) {}

  async run(noteId: number) {
    const note = await this.noteGetByIdRepository.getById(noteId);
    return note;
  }
}
