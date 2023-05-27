import { Note } from "../domain/Note";
import { NoteUpdateRepository } from "../domain/NoteRepository";

export class NoteUpdateUseCase {
  constructor(readonly noteUpdateRepository: NoteUpdateRepository) {}

  async run(note: Note) {
    const updateNote = await this.noteUpdateRepository.updateNote(note);
    return updateNote;
  }
}