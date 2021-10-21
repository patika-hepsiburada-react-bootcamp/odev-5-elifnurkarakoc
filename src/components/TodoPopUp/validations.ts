import * as yup from "yup";

const max = 50;
const min = 5;
export const validationSchema = yup.object().shape({
    title: yup.string().required().min(min).max(max),
    date: yup.date().required("Please select date").min(new Date(), "You can't choose a past date!"),
    tag: yup.string().required(),
    description: yup.string().required(),
    important: yup.boolean(),
    completed: yup.boolean(),
    deleted: yup.boolean(),
});
