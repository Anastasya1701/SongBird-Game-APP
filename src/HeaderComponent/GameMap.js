/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class GameMap extends Component {
  render() {
    return (
      <div className="header__game-map">
        <div className="header__game-item">Разминка</div>
        <div className="header__game-item">Воробьиные</div>
        <div className="header__game-item">Лесные</div>
        <div className="header__game-item">Певчие</div>
        <div className="header__game-item">Хищные</div>
        <div className="header__game-item">Морские</div>
      </div>
    );
  }
}

export default GameMap;
