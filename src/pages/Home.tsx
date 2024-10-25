import { useEffect, useState } from "react";
import { Expense } from "../type";
import { ExpenseTotals } from "../components/ExpenseTotals";
import { CategoryExpense } from "../components/CategoryExpense";
import { MonthlyExpenses } from "../components/MonthlyExpenses";

// column carts

// const timeSeriesData = [
//   { date: "2024-01", amount: 150 },
//   { date: "2024-02", amount: 280 },
//   { date: "2024-03", amount: 200 },
//   { date: "2024-04", amount: 340 },
//   { date: "2024-05", amount: 190 },
//   { date: "2024-06", amount: 250 },
// ];

// const expensesByDate = [
//   { date: "2024-03-15", description: "Groceries", amount: 85.5 },
//   { date: "2024-03-14", description: "Gas", amount: 45.0 },
//   { date: "2024-03-13", description: "Restaurant", amount: 65.25 },
//   { date: "2024-03-12", description: "Movie tickets", amount: 30.0 },
//   { date: "2024-03-11", description: "Shopping", amount: 120.75 },
// ];

// const columnChartOptions = {
//   chart: {
//     toolbar: { show: false },
//   },
//   xaxis: {
//     categories: timeSeriesData.map((item) => item.date),
//   },
//   yaxis: {
//     title: { text: "Amount ($)" },
//   },
// };

// const columnChartSeries = [
//   {
//     name: "Monthly Expenses",
//     data: timeSeriesData.map((item) => item.amount),
//   },
// ];

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
