import { Note } from "../../domain/Note";
import { CreateNoteRepository } from "../../domain/NoteRepository";
import { pool } from "../db-connection";

export class CreateNoteImplements implements CreateNoteRepository {
  async createNote(note: Note): Promise<Note | null> {
    const sql =
      "INSERT INTO notes (title, body) VALUES ($1, $2) RETURNING *";
    const values = [note.title, note.body];
    try {
      const result = await pool.query(sql, values);
      if (result.rowCount > 0) {
        const createdNoteData = result.rows[0];
        const createdNote: Note = {
          id: createdNoteData.id,
          title: createdNoteData.title,
          body: createdNoteData.body,
        };
        return createdNote;
      }
      return null;
    } catch (err) {
      throw err;
    }
  }
}

