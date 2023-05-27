import { Note } from "./Note";

export interface NoteGetByIdRepository {
  getById(noteId: number): Promise<Note | null>;
}

export interface CreateNoteRepository {
  createNote(note: Note): Promise<Note | null>;
}

export interface NoteGetAllRepository {
  getAll(): Promise<Note[] | null>;
}

export interface NoteDeleteRepository {
  deleteNote(noteId: number): Promise<String | null>;
}

export interface NoteUpdateRepository {
  updateNote(note: Note): Promise<Note | null>;
}