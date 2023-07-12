// A React ROOT compoenent that is exported into index.js main root file where the react library is rendered
// HTML code in this javascript code is called JSX (javascript XML), this is valid syntax because
// NPM start transforms all this code into valid code for the web browser.
// By right clicking on inspect webpage and going to debugger and checking out the bundle.js
// subfile, we can see the React code that happens "under the hood" a.k.a the transformed code.
function App() {
  // the HTML code below is our desired target state, which is what we want REACT to render
  return (
    <div>
      <h2>Let's get started!</h2>
      <p> Testing testing 1 2 3</p>
    </div>
  );
}

export default App;
