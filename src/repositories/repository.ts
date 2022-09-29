import { Request, Response } from "express";
import { baseNotes, categories } from "../helpers/data"; 
import { countActiveArchivedNotes } from "../helpers/categories";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
import { noteSchema, idSchema } from "../services/validations";

let notes = baseNotes;

export function getAllNotes(req: Request, res: Response) {

    const displayNotes = notes.map((note) => ({
        ...note,
        created: dayjs(note.created).format("MMM dd, YYYY")
    }));

    res.send(displayNotes);
}

export async function getNoteById(req: Request, res: Response) {
    const { id } = req.params;

    const validationResult = await idSchema.isValid({ id });

    if (!validationResult) 
        res.sendStatus(400);

    const note = notes.find(note => note.id === id);

    if (note) {

        res.send({
            ...note,
            created: dayjs(note.created).format("MMM dd, YYYY"),
        });

    } else {

        res.sendStatus(404);
    }
}

export async function getNotesStats(req: Request, res: Response) {

    const stats = categories.map(category => {

        const { active, archived } = countActiveArchivedNotes(
            category.name,
            notes
        );

        return {
            category: category.name,
            active,
            archived
        };
    })

    res.send(stats);
}

export async function addNote(req: Request, res: Response) {

    const newNotePayload = {
        ...req.body,
        id: uuidv4(),
        created: new Date(),
        isArchived: false,
    };

    const validationResult = await noteSchema.isValid({
      name: newNotePayload.name,
      content: newNotePayload.content,
      category: newNotePayload.category,
    });

    if (!validationResult) 
        res.sendStatus(400);
    
    notes.push(newNotePayload);

    res.sendStatus(200);
}

export async function deleteNoteById(req: Request, res: Response) {
    const { id } = req.params;

    const validationResult = await idSchema.isValid({ id });

    if (!validationResult) 
        res.sendStatus(400);

    const noteForDeletion = notes.find(note => note.id === id);

    if (noteForDeletion) {

        notes = [...notes.filter(note => note.id !== noteForDeletion.id)];

        res.send(200);
        
    } else {

        res.sendStatus(400);
    }
}

export async function editNoteById(req: Request, res: Response) {
    const { id } = req.params;

    const validationResultId = await idSchema.isValid({ id });

    if (!validationResultId) {
        res.sendStatus(400);
        res.send();
    }  

    const editNoteIndex = notes.findIndex((note) => note.id === id);

    if (editNoteIndex === -1) {
        res.sendStatus(400);
        res.send();
    }

    const note = notes[editNoteIndex];

            const updatedNote = {
              ...note,
              ...req.body,
            };

            const validationResult = await noteSchema.isValid({
              name: updatedNote.name,
              content: updatedNote.content,
              category: updatedNote.category,
            });

            if (!validationResult) {
              res.sendStatus(400);
              res.send();
            }

    
    notes[editNoteIndex] = updatedNote;

    res.sendStatus(200);
}