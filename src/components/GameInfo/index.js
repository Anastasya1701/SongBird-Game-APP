import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import Pic from '../../assets/images/bird.jpg';
import 'react-h5-audio-player/src/styles.scss';
import Voice from '../../assets/audio/test.mp3';

const GameInfo = props => {
  return (
    <div className="game__info">
      <img src={Pic} className="bird-pic" alt="bird" width="200" height="150" />
      <span className="bird-name">******</span>
      <span className="game__info-name">NameLatin</span>
      <AudioPlayer src={Voice} />
      <p className="game__info-description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
        laboriosam expedita aspernatur fugit velit ad totam autem voluptatibus,
        animi corrupti, dolorem neque quis aut rerum voluptates iusto provident
        assumenda deserunt.
      </p>
    </div>
  );
};

export default GameInfo;
