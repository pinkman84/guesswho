const React = require('react');

const GuessForm = React.createClass({
  getInitialState: function() {
    return {
      selected: null
    };
  },

  guess: function(e){
    e.preventDefault()
    let newGuess = e.target.value
    this.setState({selected:newGuess})
  },

  revealAnswer: function(guess){
    console.log('clicked');
    console.log(guess);
    if(guess === this.props.answer){
      return <h3> You guessed correct </h3>
    }
    else{
      return <h3> Nope sorry </h3>
    }
  },

  render: function() {
    let characters = this.props.names.map(function(character){
      return <option key={character.id} value={character.name}>{character.name}</option>
    })

    return (
      
      <div>
        <form >
          <select value={this.state.selected} onSubmit={this.guess}>
            {characters}
          </select>
          <input type="submit"/>
        </form>
        {this.revealAnswer(this.state.selected)}
      </div>
      
      );
  }

});

module.exports = GuessForm;