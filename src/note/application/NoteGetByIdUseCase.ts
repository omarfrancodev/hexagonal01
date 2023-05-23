import { NoteGetByIdRepository } from "../domain/NoteRepository";

export class NoteGetByIdUseCase {
  constructor(readonly noteGetByIdRepository: NoteGetByIdRepository) {}

  async run(noteId: string) {
    const note = await this.noteGetByIdRepository.getById(noteId);
    if (!note) throw new Error("Nota no encontrada");
    return note;
  }
}
