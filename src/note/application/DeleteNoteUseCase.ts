import { NoteDeleteRepository } from "../domain/NoteRepository";

export class DeleteNoteUseCase {
  constructor(readonly deleteNoteRepository: NoteDeleteRepository) {}

  async run(noteId: number) {
    const deleteNote = await this.deleteNoteRepository.deleteNote(noteId);
    return deleteNote;
  }
}