// With React components, it is typical to name the files with a capital letter

import "./ExpenseItem.css"

// It is very important to not use "class" in each html element, but instead className
// because it is common convention to do so in React.
// toISOString is a toString method that we use to print out a format for the Date object
function ExpenseItem() {
    const expenseDate = new Date(2023, 1, 1);
    const expenseTitle = "Bil Forsikring";
    const expenseAmount = 294.19;
  return (
    <div className="expense-item">
      <div> {expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2> {expenseTitle} </h2>
        <div className="expense-item__price"> {expenseAmount} kr</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
