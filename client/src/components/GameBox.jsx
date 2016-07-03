const React = require('react');
const Characters = require('../SampleData.js');
const CharacterBox = require('./CharacterBox.jsx');
const GuessForm = require('./GuessForm.jsx');
const QuestionForm = require('./QuestionForm.jsx');

const GameBox = React.createClass({

  getInitialState: function() {
    return {
      characters: Characters 
    };
  },

  randomCharacter: function(){
     let character = this.state.characters[Math.floor(Math.random() * this.state.characters.length)]
     // return character
     console.log(character);
  },

  componentDidMount: function() {
    this.randomCharacter();
  },

  render: function() {
    return (
      <div>
        <h1> Game of Thrones </h1>
        <h2>Guess Who</h2>
        <div key = {this.state.characters.id} className="charachter-box">
          <CharacterBox characters={this.state.characters} />
        </div>
        <div className="question-form">
          <QuestionForm info={this.state.characters} answer={this.randomCharacter}/>
        </div>
        <div className = "guess-form">
          <GuessForm names={this.state.characters} answer={this.randomCharacter.name}/>
        </div>
      </div>
    );
  }
})


module.exports = GameBox;