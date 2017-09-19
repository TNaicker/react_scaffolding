const greeting = require('./greeting');
const ReactDOM = require('react-dom'); // REQUIRE REACT DOM !

window.onload = function () {
  const App = document.querySelector('#example-app');

  ReactDOM.render(greeting, App);
}
