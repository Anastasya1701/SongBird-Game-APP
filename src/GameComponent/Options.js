import React, { Component } from 'react';

class Options extends Component {
  render() {
    return (
      <div className="game__options">
        <div className="game__options-item">Ворон</div>
        <div className="game__options-item">Журавль</div>
        <div className="game__options-item">Ласточка</div>
        <div className="game__options-item">Синица</div>
        <div className="game__options-item">Щегол</div>
        <div className="game__options-item">Петушок</div>
      </div>
    );
  }
}

export default Options;
