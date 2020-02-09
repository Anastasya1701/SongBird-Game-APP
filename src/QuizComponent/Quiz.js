import React, { Component } from 'react';
import Picture from './Picture';
import Name from './Name';
import Player from './Player';

class Quiz extends Component {
  render() {
    return (
      <div className="quiz">
        <Picture />
        <Name />
        <Player />
      </div>
    );
  }
}

export default Quiz;
