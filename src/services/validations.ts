import * as yup from "yup";

const categories = ["Task", "Random Thought", "Idea", "Quote"];

export const noteSchema = yup
    .object({
        name: yup.string().min(4),
        category: yup
            .string()
            .oneOf(
                categories,
                "Category can use: Task, Random Thought, Idea or Quote."
            ),
        content: yup.string().min(8),
    })
    .strict()
    .noUnknown(true);

export const idSchema = yup
    .object({
        id: yup.string().required("Enter ID of note.").uuid(),
    })
    .strict()
    .noUnknown(true);
    

