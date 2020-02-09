import React, { Component } from 'react';
import BirdPic from './BirdPic';
import BirdName from './BirdName';
import BirdVoice from './BirdVoice';

class Quiz extends Component {
  render() {
    return (
      <div className="quiz">
        <BirdPic />
        <BirdName />
        <BirdVoice />
      </div>
    );
  }
}

export default Quiz;
