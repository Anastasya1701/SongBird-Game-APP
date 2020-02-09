import React, { Component } from 'react';
import Score from './Score';
import GameMap from './GameMap';
import Logo from '../assets/images/logo.svg';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__container">
          <h1 className="header__logo">
            <img
              src={Logo}
              className="header__logo-image"
              alt="Logo"
              width="200"
            />
          </h1>
          <Score />
        </div>
        <GameMap />
      </div>
    );
  }
}

export default Header;
