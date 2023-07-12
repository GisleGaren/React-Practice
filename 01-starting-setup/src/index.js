// Our REACT STARTING component. This imports a ReactDOM object from the package.json file and this object provides
// all the methods needed to render React components in the browser.
import ReactDOM from 'react-dom/client';
// Imports all the components of index.css into this index.js file
import './index.css';
// Imports all the logic from the app.js file into this one
import App from './App';

// This is the file that starts everything in React
// We start our React application in the index.html file's "root" div
// The content of the "root" div in index.html is replaced with the app.js logic
const root = ReactDOM.createRoot(document.getElementById('root'));
// App is a component and the render method renders the app component into the root object which we stored in const root.
root.render(<App />);
