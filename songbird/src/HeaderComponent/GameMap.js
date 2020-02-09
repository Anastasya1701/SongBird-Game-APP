/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class GameMap extends Component {
  render() {
    return (
      <div className="game-map">
        <span className="game-map__item">Разминка</span>
        <span className="game-map__item">Воробьиные</span>
        <span className="game-map__item">Лесные</span>
        <span className="game-map__item">Певчие</span>
        <span className="game-map__item">Хищные</span>
        <span className="game-map__item">Морские</span>
      </div>
    );
  }
}

export default GameMap;
