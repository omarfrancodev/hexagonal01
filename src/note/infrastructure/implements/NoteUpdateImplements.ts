import { Note } from "../../domain/Note";
import { NoteUpdateRepository } from "../../domain/NoteRepository";
import { pool } from "../db-connection";

export class NoteUpdateImplements implements NoteUpdateRepository {
  async updateNote(note: Note): Promise<Note | null> {
    const sql = "UPDATE notes SET title = $2, body = $3 WHERE id = $1 RETURNING *";
    const values = [note.id, note.title, note.body];
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

