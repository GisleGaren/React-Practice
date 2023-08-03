// With React components, it is typical to name the files with a capital letter
import Card from "../UI/Card";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
// It is very important to not use "class" in each html element, but instead className
// because it is common convention to do so in React.
// toISOString is a toString method that we use to print out a format for the Date object

// props allow React components to become reusable by allowing us to exchange data from a parent container to its children
// instead of hardcoding everything
// We could also use "object destructuring" by writing ({date, title, amount}) instead of (props)
// in order to exchange data between components. You would also need to remove props.date to just date

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2> {props.title} </h2>
        <div className="expense-item__price"> {props.amount} kr</div>
      </div>
      <button
        onClick={() => {
          console.log("Clicked!");
        }}
      >
        Change Title
      </button>
    </Card>
  );
}

export default ExpenseItem;
