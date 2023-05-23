import { Note } from "./Note";

export interface NoteGeBytIdRepository {
    getById(noteId: string): Promise<Note | null>;
}

export interface SendNoteRepository {
    send(title: string, body: string): Promise<void>;
}