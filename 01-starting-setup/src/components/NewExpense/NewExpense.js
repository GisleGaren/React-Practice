import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  const [showAddButton, setShowAddButton] = useState(false);
  /* onSaveExpenseData is a prop that takes in a function */
  const saveExpenseDataHandler = (enteredExpenseData) => {
    /* We expect to receive the object from ExpenseForm that was typed in via the input boxes and we pass that as input into the
     saveExpenseDataHandler function and pass it into expenseData.
    */
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const setAddButton = () => {
    setShowAddButton(true);
  }

  const hideAddButton = () => {
    setShowAddButton(false);
  }
  return (
    <div className="new-expense">
      {!showAddButton && <button onClick={setAddButton}>Add New Expense</button>}
      {showAddButton && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onHideButton={hideAddButton}></ExpenseForm>}
    </div>
  );
};

export default NewExpense;
