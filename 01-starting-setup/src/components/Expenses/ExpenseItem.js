// With React components, it is typical to name the files with a capital letter

// In order to for React to render again after its initial render, we need to introduce a "named import". useState is a function from the React
// library and it allows us to see the updated values
import React, { useState } from "react";
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
  // useState() is a React hook and can ONLY be called in components and cannot be called in a nested function.
  // ONLY in the component function. With useState we create a special variable where changes in that variable will
  // lead to the component function to be called again.

  // The first element with this array destructuring, is a pointer to the first value, which is the value in props.title
  // whilst setTitle is a function we can call later to set a new title. useState() ALWAYS returns an array with exactly two elements
  // It is always the case that the first element is the current state value and the second element is a function to update that value.
  // By calling the function, we are essentially saying that React needs to re-evaluate the component function again.
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    // By calling
    setTitle("Updated!");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2> {props.title} </h2>
        <div className="expense-item__price"> {props.amount} kr</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
