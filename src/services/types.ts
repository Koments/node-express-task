export type Note = {
    id: string;
    created: Date;
    name: string;
    category: Categories;
    content: string;
    isArchived: boolean;
}

export type Categories = "Task" | "Random Thought" | "Idea" | "Quote";

export type Category = {
    name: Categories;
    iconClass: string;
};

export type CategoryStats = {
    category: Categories;
    active: number;
    archived: number;
}
