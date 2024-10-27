import { useEffect, useState } from "react";
import { Expense } from "../type";
import { ExpenseTotals } from "../components/ExpenseTotals";
import { CategoryExpense } from "../components/CategoryExpense";
import { MonthlyExpenses } from "../components/MonthlyExpenses";

export const Home = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  // fetching expenses
  useEffect(() => {
    const storedExpenses = localStorage.getItem("expenses");
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    }
  }, []);

  console.log(expenses);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4 mb-16 ">
        <ExpenseTotals expenses={expenses} />
        <CategoryExpense expenses={expenses} />
        <MonthlyExpenses expenses={expenses} />
      </div>
    </div>
  );
};
