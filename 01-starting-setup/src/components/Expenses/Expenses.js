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
  return (
    <Card className="expenses">
      <ExpenseFilter
        defaultYear={selectedYear}
        onExpenseFilterSave={expenseFilterSave}
      ></ExpenseFilter>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
