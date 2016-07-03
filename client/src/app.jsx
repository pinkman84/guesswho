const React = require('react');
const ReactDOM = require('react-dom');
const GameBox = require('./components/GameBox.jsx');


window.onload = function(){
  ReactDOM.render(
    <GameBox />,
    document.getElementById('app')
  );
}
