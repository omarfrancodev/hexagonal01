import { CreateNoteUseCase } from "../application/CreateNoteUseCase";
import { NoteGetAllUseCase } from "../application/NoteGetAllUseCase";
import { NoteGetByIdUseCase } from "../application/NoteGetByIdUseCase";

import { CreateNoteController } from "./controllers/CreateNoteController";
import { NoteGetAllController } from "./controllers/NoteGetAllController";
import { NoteGetbyIdController } from "./controllers/NoteGetByIdController";

import { CreateNoteImplements } from "./implements/CreateNoteImplements";
import { NoteGetAllImplements } from "./implements/NoteGetAllImplements";
import { NoteGetByIdImplements } from "./implements/NoteGetByIdImplements";

const createNoteImplements = new CreateNoteImplements();
export const createNoteUseCase = new CreateNoteUseCase(createNoteImplements);
export const createNoteController = new CreateNoteController(createNoteUseCase);

const noteGetByIdImplements = new NoteGetByIdImplements();
export const noteGetByIdUseCase = new NoteGetByIdUseCase(noteGetByIdImplements);
export const noteGetByIdController = new NoteGetbyIdController(
  noteGetByIdUseCase
);

const noteGetAllImplements = new NoteGetAllImplements();
export const noteGetAllUseCase = new NoteGetAllUseCase(noteGetAllImplements);
export const noteGetAllController = new NoteGetAllController(noteGetAllUseCase);
