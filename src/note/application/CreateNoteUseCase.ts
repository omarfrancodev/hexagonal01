import { Note } from "../domain/Note";
import { CreateNoteRepository } from "../domain/NoteRepository";

export class CreateNoteUseCase {
  constructor(readonly createNoteRepository: CreateNoteRepository) {}

  async run(note: Note) {
    const createNote = await this.createNoteRepository.createNote(note);
    return createNote;
  }
}