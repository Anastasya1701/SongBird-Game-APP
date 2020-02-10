import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import Pic from '../../assets/images/bird.jpg';
import 'react-h5-audio-player/src/styles.scss';

const Quiz = ({ state, currentBird, }) => {
  return (
    <div className="quiz">
      <img src={!state ? currentBird.image : Pic} className="bird-pic" alt="bird" width="200" height="150" />
      <span className="bird-name">
        {!state ? currentBird.name : '******'}
      </span>
      <AudioPlayer
        src={currentBird.audio}
        autoPlayAfterSrcChange={false}
      />
    </div>
  );
};

export default Quiz;
