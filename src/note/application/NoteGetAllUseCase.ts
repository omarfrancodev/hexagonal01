import { NoteGetAllRepository } from "../domain/NoteRepository";

export class NoteGetAllUseCase {
    constructor(readonly noteGetAllRepository: NoteGetAllRepository) { }

    async run(){
        const listAllNotes = await this.noteGetAllRepository.getAll();
        return listAllNotes;
    }
}
