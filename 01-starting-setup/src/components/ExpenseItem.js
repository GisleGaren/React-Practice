// With React components, it is typical to name the files with a capital letter

import "./ExpenseItem.css"

// It is very important to not use "class" in each html element, but instead className
// because it is common convention to do so in React.
// toISOString is a toString method that we use to print out a format for the Date object

// props allow React components to become reusable by allowing us to exchange data from a parent container to its children
// instead of hardcoding everything
// We could also use "object destructuring" by writing ({date, title, amount}) instead of (props)
// in order to exchange data between components. You would also need to remove props.date to just date
function ExpenseItem(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long'});
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString('en-US', { day: '2-digit'});
  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div> {props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2> {props.title} </h2>
        <div className="expense-item__price"> {props.amount} kr</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
