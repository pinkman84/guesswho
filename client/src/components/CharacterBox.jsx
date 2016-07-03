const React = require('react');

const CharacterBox = React.createClass({

  render: function() {
     var character = this.props.characters.map(function(char){
      return(
          <div key={char.id} className={char.name}>
            <img src={char.img} />
            <h3>{char.name}</h3>
          </div>
        );
      });

    return (
      <div>
        {character}
      </div>
    );
  }

});

module.exports = CharacterBox;