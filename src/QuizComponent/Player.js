import React, { Component } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import Voice from '../assets/audio/test.mp3';

class Player extends Component {
  render() {
    return <AudioPlayer src={Voice} />;
  }
}

export default Player;
