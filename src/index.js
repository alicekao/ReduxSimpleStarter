import React from 'react'; // Used to create and manage components
import ReactDOM from 'react-dom'; // Used to interact with DOM

// Create a new component. This component should produce some HTML
// App is a component class (creates instances of hi divs)
// Fat arrow is ES6, identicaly to function() {}, only difference is the value of this
const App = () => {
  return <div>Hiiii!</div>;
}

// To create an instance of App, wrap in tags:
// <App />
// Take this component's generate HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
