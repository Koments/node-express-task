import { Note } from "../services/types";

export function countActiveArchivedNotes(categoryName: string, storedNotes: Note[]) {

    const archivedNotesList = storedNotes.filter((note) => note.category === categoryName && note.isArchived);
    const activeNotesList = storedNotes.filter((note) => note.category === categoryName && !note.isArchived);

    return {
        active: activeNotesList.length,
        archived: archivedNotesList.length
    };
}