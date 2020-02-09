import React, { Component } from 'react';
import Pic from '../assets/images/bird.jpg';

class Picture extends Component {
  render() {
    return (
      <img src={Pic} className="bird-pic" alt="bird" width="200" height="150" />
    );
  }
}

export default Picture;
