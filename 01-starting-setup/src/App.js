// A React ROOT compoenent that is exported into index.js main root file where the react library is rendered
// HTML code in this javascript code is called JSX (javascript XML), this is valid syntax because
// NPM start transforms all this code into valid code for the web browser.
// By right clicking on inspect webpage and going to debugger and checking out the bundle.js
// subfile, we can see the React code that happens "under the hood" a.k.a the transformed code.


// REMEMBER THAT IN return () statement, we can ONLY RETURN 1 ELEMENT, so make sure we have a div parent container, or a 
// custom react component!

import Expenses from "./components/Expenses/Expenses";

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

  // Note that in e.g title={expenses[0].title}, the first title is the title in the ExpenseItem.js component,
  // whilst the title coming from expenses[0].title comes from the array object we defined
  // The first title MUST match the variable name in ExpenseItem.js (props.title), if it is props.title1, then
  // we would have title1={expenses[0].title} and that would be valid syntax
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
