import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Costco", amount: 100, category: "Groceries" },
    { id: 2, description: "GAS", amount: 200, category: "Utilities" },
    { id: 3, description: "IGA", amount: 300, category: "Groceries" },
    { id: 4, description: "Netflix", amount: 400, category: "Entertainment" },
  ]);

  const visibleExpenses = expenses.filter((expense) =>
    selectedCategory ? expense.category === selectedCategory : expenses
  );

  return (
    <>
      <div>
        <div className="mb-5">
          <ExpenseForm
            onSubmit={(expense) =>
              setExpenses([
                ...expenses,
                { ...expense, id: expenses.length + 1 },
              ])
            }
          ></ExpenseForm>
        </div>
        <div className="mb-3">
          <ExpenseFilter
            onSelectCategory={(category) => setSelectedCategory(category)}
          ></ExpenseFilter>
        </div>
        <div>
          <ExpenseList
            expenses={visibleExpenses}
            onDelete={(id) =>
              setExpenses(expenses.filter((expense) => expense.id !== id))
            }
          ></ExpenseList>
        </div>
      </div>
    </>
  );
}

export default App;
