const greeting = require('./greeting');
const ReactDOM = require('react-dom'); // REQUIRE REACT DOM !
const css = require('../css/app.css');

window.onload = function () {
  const App = document.querySelector('#example-app');

  ReactDOM.render(greeting, App);
}
