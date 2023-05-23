import { Note } from "./Note";

export interface NoteGetByIdRepository {
  getById(noteId: string): Promise<Note | null>;
}

export interface CreateNoteRepository {
  createNote(note: Note): Promise<Note | null>;
}

export interface NoteGetAllRepository {
  getAll(): Promise<Note[] | null>;
}
