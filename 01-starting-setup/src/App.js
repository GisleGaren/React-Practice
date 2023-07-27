// A React ROOT compoenent that is exported into index.js main root file where the react library is rendered
// HTML code in this javascript code is called JSX (javascript XML), this is valid syntax because
// NPM start transforms all this code into valid code for the web browser.
// By right clicking on inspect webpage and going to debugger and checking out the bundle.js
// subfile, we can see the React code that happens "under the hood" a.k.a the transformed code.

import ExpenseItem from "./components/ExpenseItem";

function App() {
  // the HTML code below is our desired target state, which is what we want REACT to render
  // Convention is that lower case elements are built in elements, whilst uppercase are custom made elements
  // We use the name of the import dom object when we want to implement these custom elements
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
