import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import Pic from '../../assets/images/bird.jpg';
import 'react-h5-audio-player/src/styles.scss';

const GameInfo = ({ tempBird, state }) => {
  return (
    <div className="game__info">
      <img
        src={tempBird ? tempBird.image : Pic}
        className={tempBird ? 'bird-pic' : 'none'}
        alt="bird"
        width="200"
        height="150"
      />
      <span className="bird-name">
        {tempBird ? tempBird.name : ''}
      </span>
      <span className="game__info-name">
        {tempBird ? tempBird.species : ''}
      </span>
      <AudioPlayer
        src={tempBird.audio}
        autoPlayAfterSrcChange={false}
        className={tempBird ? '' : 'none'}
      />
      <p className="game__info-description">
        {!state
          ? tempBird.description
          : 'Послушай аудио и выбери птицу нагетцоед.'}
      </p>
    </div>
  );
};

export default GameInfo;
