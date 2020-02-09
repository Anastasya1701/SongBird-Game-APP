import React, { Component } from 'react';

class Score extends Component {
  state = {
    score: {
      value: 0
    }
  };

  render() {
    return (
      <div className="header__score">
        <span className="header__score-text">Score: </span>
        <span className="header__score-value">{this.state.score.value}</span>
      </div>
    );
  }
}

export default Score;
