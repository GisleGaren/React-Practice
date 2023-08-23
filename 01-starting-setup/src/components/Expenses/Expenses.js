import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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

  // In filteredExpenses, we could instead do "filteredExpenses.length === 0 && <p>No Expenses Found </p>"
  // which means that as long as the first condition before the && is true, the second part will render
  // Then we could do filteredExpenses.length > 0 && filteredExpenses.map((expense) => ( etc etc etc))
  return (
    <Card className="expenses">
      <ExpenseFilter
        defaultYear={selectedYear}
        onExpenseFilterSave={expenseFilterSave}
      ></ExpenseFilter>
      <ExpensesChart
        expenses={filteredExpenses}
      ></ExpensesChart>
      <ExpensesList
        items={filteredExpenses}
      ></ExpensesList>
      {/*filteredExpenses.length === 0 ? <p>No Expenses Found.</p> : filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))*/}
      
    </Card>
  );
}

export default Expenses;
