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
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
