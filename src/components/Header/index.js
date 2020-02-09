import React from 'react';
import Logo from '../../assets/images/logo.svg';

const Header = props => {
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
        <div className="header__score">
          <span className="header__score-text">Score: </span>
          <span className="header__score-value">{props.score}</span>
        </div>
      </div>
      <div className="header__game-map">
        {props.BirdsData.map((item, index) => {
          return (
            <div
              className={
                props.currentStep === index
                  ? 'header__game-item active'
                  : 'header__game-item'
              }
              key={item.id}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
