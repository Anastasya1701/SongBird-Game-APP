import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import Pic from '../../assets/images/bird.jpg';
import 'react-h5-audio-player/src/styles.scss';

const GameInfo = props => {
  return (
    <div className="game__info">
      <img
        src={props.tempBird ? props.tempBird.image : Pic}
        className={props.tempBird ? 'bird-pic' : 'none'}
        alt="bird"
        width="200"
        height="150"
      />
      <span className="bird-name">
        {props.tempBird ? props.tempBird.name : ''}
      </span>
      <span className="game__info-name">
        {props.tempBird ? props.tempBird.species : ''}
      </span>
      <AudioPlayer
        src={props.tempBird.audio}
        autoPlayAfterSrcChange={false}
        className={props.tempBird ? '' : 'none'}
      />
      <p className="game__info-description">
        {!props.state
          ? props.tempBird.description
          : 'Привет выбери птицу нагетцоед'}
      </p>
    </div>
  );
};

export default GameInfo;
