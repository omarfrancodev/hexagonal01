import { Note } from "../../domain/Note";
import { NoteGetByIdRepository } from "../../domain/NoteRepository";
import { pool } from "../db-connection";

export class NoteGetByIdImplements implements NoteGetByIdRepository {
  async getById(noteId: number): Promise<Note | null> {
    const sql = "SELECT * FROM notes WHERE id = $1";
    const values = [noteId];
    try {
      const result = await pool.query(sql, values);
      if (result.rowCount > 0) {
        const noteData = result.rows[0];
        const note: Note = {
          id: noteData.id,
          title: noteData.title,
          body: noteData.body,
        };
        return note;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}
