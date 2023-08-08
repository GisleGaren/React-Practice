import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  /* onSaveExpenseData is a prop that takes in a function */
  const saveExpenseDataHandler = (enteredExpenseData) => {
    /* We expect to receive the object from ExpenseForm that was typed in via the input boxes and we pass that as input into the
     saveExpenseDataHandler function and pass it into expenseData.
    */
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString(),
    };
    //console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
