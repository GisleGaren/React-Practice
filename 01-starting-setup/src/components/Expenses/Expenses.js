import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import React, { useState } from "react";

function Expenses(props) {
  // Bonus if we want the dropdown menu to show 2020 as default instead of 2022
  // in the ExpensesFilter component we can change useState("") to useState("2020")
  const [selectedYear, setYear] = useState("2020");

  const expenseFilterSave = (enteredYear) => {
    console.log(enteredYear);
    setYear(enteredYear);
  };
  // First we create an Array which has filtered the existing array by the selected year state!
  const filteredExpenses = props.items.filter(
    (expenses) => expenses.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        defaultYear={selectedYear}
        onExpenseFilterSave={expenseFilterSave}
      ></ExpenseFilter>

      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))}
    </Card>
  );
}

export default Expenses;
