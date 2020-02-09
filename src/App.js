import React, { Component } from 'react';
import Header from './HeaderComponent/Header';
import Quiz from './QuizComponent/Quiz';
import Game from './GameComponent/Game';
import NextLevel from './NextLevelComponent/NextLevel';
import './styles/main.scss';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Quiz />
        <Game />
        <NextLevel />
      </div>
    );
  }
}

export default App;
