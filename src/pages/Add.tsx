import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { categories } from "../data";
import { Toaster, toast } from "sonner";
import { Expense } from "../type";
import { schema } from "../schema";

type FormData = yup.InferType<typeof schema>;

const Add = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  // fetching expenses
  useEffect(() => {
    const storedExpenses = localStorage.getItem("expenses");
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (newExpense: FormData) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { ...newExpense, date: newExpense.date.toISOString() },
    ]);
    localStorage.setItem("expenses", JSON.stringify([...expenses, newExpense]));
    toast.success("Expense added successful");
    reset();
  };

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto p-4  h-[90vh] flex  items-center justify-center">
      <Toaster position="top-center" richColors />
        {/* <header className="text-3xl font-bold   text-center my-4">
          Expense Tracker
        </header> */}

        <section className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%]">
          <h2 className="text-2xl font-medium mb-4 text-center">
            Add New Expense
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="amount" className="block text-sm font-medium">
                Amount
              </label>
              <input
                type="number"
                id="amount"
                className={`w-full p-2 border rounded ${
                  errors.amount ? "border-red-500" : ""
                }`}
                {...register("amount")}
              />
              {errors.amount && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.amount.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="category" className="block text-sm font-medium">
                Category
              </label>
              <select
                id="category"
                className={`w-full p-2 border rounded ${
                  errors.category ? "border-red-500" : ""
                }`}
                {...register("category")}
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.label}>
                    {category.label}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.category.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="date" className="block text-sm font-medium">
                Date
              </label>
              <input
                type="date"
                id="date"
                max={new Date().toISOString().split("T")[0]}
                className={`w-full p-2 border rounded ${
                  errors.date ? "border-red-500" : ""
                }`}
                {...register("date")}
              />
              {errors.date && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.date.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium"
              >
                Description
              </label>
              <input
                type="text"
                id="description"
                className={`w-full p-2 border rounded ${
                  errors.description ? "border-red-500" : ""
                }`}
                {...register("description")}
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            >
              Add Expense
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};
export default Add;
