import * as yup from "yup";

export const schema = yup.object({
  amount: yup
    .number()
    .required("Amount is required")
    .positive("Amount must be positive")
    .typeError("Amount must be a number"),
  category: yup.string().required("Category is required"),
  date: yup
    .date()
    .required("Date is required")
    .max(new Date(), "Cannot select future dates")
    .typeError("Invalid date"),
  description: yup
    .string()
    .required("Description is required")
    .min(3, "Description must be at least 3 characters"),
});
