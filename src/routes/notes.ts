import express from "express";
import {
    getAllNotes,
    getNoteById,
    getNotesStats,
    addNote,
    deleteNoteById,
    editNoteById,
} from "../repositories/repository";

export const notesRouter = express.Router();

notesRouter.route("/stats").get(getNotesStats);

notesRouter.route("/").get(getAllNotes);
notesRouter.route("/").post(addNote);

notesRouter.route('/:id').get(getNoteById);
notesRouter.route("/:id").delete(deleteNoteById);
notesRouter.route("/:id").patch(editNoteById);