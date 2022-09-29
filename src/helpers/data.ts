import { Category, Note } from "../services/types";
import { v4 as uuidv4 } from "uuid";

export const baseNotes: Note[] = [
    {
        id: uuidv4(),
        created: new Date(),
        name: "Shopping list",
        category: "Task",
        content: "Tomatoes, bread",
        isArchived: false,
    },
    {
        id: uuidv4(),
        created: new Date(),
        name: "The theory of evolution",
        category: "Random Thought",
        content: "Theory in biology postulating that the various types of plants",
        isArchived: false,
    },
    {
        id: uuidv4(),
        created: new Date(),
        name: "New Feature",
        category: "Idea",
        content:
        "New technology usually requires a supportive infrastructure and the allocation of scarce resources for preparing the implementation site. ",
        isArchived: false,
    },
    {
        id: uuidv4(),
        created: new Date(),
        name: "William Gaddis",
        category: "Quote",
        content: "Power doesn't corrupt people, people corrupt...",
        isArchived: false,
    },
    {
        id: uuidv4(),
        name: "New Feature",
        created: new Date(),
        category: "Idea",
        content: "The Lean Startup",
        isArchived: false,
    },
    {
        id: uuidv4(),
        created: new Date(),
        name: "buy car in canada",
        category: "Task",
        content: "Used car dealer that accepts trades.",
        isArchived: false,
    },
    {
        id: uuidv4(),
        name: "H. Rackham",
        created: new Date(),
        category: "Quote",
        content:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
        isArchived: false,
    },
];

export const categories: Category[] = [
    {
        name: "Task",
        iconClass: "fa-solid fa-list-check",
    },
    {
        name: "Random Thought",
        iconClass: "fa-solid fa-brain",
    },
    {
        name: "Idea",
        iconClass: "fa-regular fa-lightbulb",
    },
    {
        name: "Quote",
        iconClass: "fa-solid fa-quote-left",
    },
];
