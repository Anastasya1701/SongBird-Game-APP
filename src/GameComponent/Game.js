import React, { Component } from 'react';
import Options from './Options';
import Picture from '../QuizComponent/Picture';
import Name from '../QuizComponent/Name';
import NameLatin from './NameLatin';
import Player from '../QuizComponent/Player';
import Description from './Description';

class Info extends Component {
  render() {
    return (
      <div className="game">
        <Options />
        <div className="game__info">
          <Picture />
          <Name />
          <NameLatin />
          <Player />
          <Description />
        </div>
      </div>
    );
  }
}

export default Info;
