import { CreateNoteUseCase } from "../application/CreateNoteUseCase";
import { NoteGetAllUseCase } from "../application/NoteGetAllUseCase";
import { NoteGetByIdUseCase } from "../application/NoteGetByIdUseCase";
import { DeleteNoteUseCase } from "../application/DeleteNoteUseCase";
import { NoteUpdateUseCase } from "../application/NoteUpdateUseCase";

import { CreateNoteController } from "./controllers/CreateNoteController";
import { NoteGetAllController } from "./controllers/NoteGetAllController";
import { NoteGetbyIdController } from "./controllers/NoteGetByIdController";
import { NoteDeleteController } from "./controllers/NoteDeleteController";
import { NoteUpdateController } from "./controllers/NoteUpdateController";

import { CreateNoteImplements } from "./implements/CreateNoteImplements";
import { NoteGetAllImplements } from "./implements/NoteGetAllImplements";
import { NoteGetByIdImplements } from "./implements/NoteGetByIdImplements";
import { NoteDeleteImplements } from "./implements/NoteDeleteImplements";
import { NoteUpdateImplements } from "./implements/NoteUpdateImplements";

const createNoteImplements = new CreateNoteImplements();
export const createNoteUseCase = new CreateNoteUseCase(createNoteImplements);
export const createNoteController = new CreateNoteController(createNoteUseCase);

const noteGetByIdImplements = new NoteGetByIdImplements();
export const noteGetByIdUseCase = new NoteGetByIdUseCase(noteGetByIdImplements);
export const noteGetByIdController = new NoteGetbyIdController(noteGetByIdUseCase);

const noteGetAllImplements = new NoteGetAllImplements();
export const noteGetAllUseCase = new NoteGetAllUseCase(noteGetAllImplements);
export const noteGetAllController = new NoteGetAllController(noteGetAllUseCase);

const deleteNoteImplements = new NoteDeleteImplements();
export const deleteNoteUseCase = new DeleteNoteUseCase(deleteNoteImplements);
export const deleteNoteController = new NoteDeleteController(deleteNoteUseCase);

const updateNoteImplements = new NoteUpdateImplements();
export const updateNoteUseCase = new NoteUpdateUseCase(updateNoteImplements);
export const updateNoteController = new NoteUpdateController(updateNoteUseCase);