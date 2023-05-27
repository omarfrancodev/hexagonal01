import { NoteDeleteRepository } from "../../domain/NoteRepository";
import { pool } from "../db-connection";

export class NoteDeleteImplements implements NoteDeleteRepository{
  async deleteNote(noteId: number): Promise<String | null> {
    const sql = "DELETE FROM notes WHERE id = $1";
    const values = [noteId];
    try {
      await pool.query(sql, values);
      return "Eliminado";
    } catch (error) {
      throw error;
    }
  }
}