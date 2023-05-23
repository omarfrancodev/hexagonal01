import { Note } from "../../domain/Note";
import { NoteGetAllRepository } from "../../domain/NoteRepository";
import { pool } from "../db-connection";

export class NoteGetAllImplements implements NoteGetAllRepository {
  async getAll(): Promise<Note[] | null> {
    const sql = "SELECT * FROM notes";
    try {
      const result = await pool.query(sql);
      const notes: Note[] = result.rows.map((noteData: any) => ({
        id: noteData.id,
        title: noteData.title,
        body: noteData.body,
      }));
      return notes;
    } catch (error) {
      throw error;
    }
  }
}
