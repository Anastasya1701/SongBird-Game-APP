import React, { Component } from 'react';

class Score extends Component {

  constructor(props) {
    super(props)
    this.state = {
      score: {
            value: 0
          }
    }
  }

  render() {
    return (
      <div className="score">
        <span className="score__text">Score:</span>
        <span className="score__value">{this.state.score.value}</span>
      </div>
    );
  }
}

export default Score;
