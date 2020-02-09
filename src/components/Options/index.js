import React from 'react';
import wrong from '../../sounds/wrong.mp3';
import success from '../../sounds/success.wav';

let scoreResult = 5;
const Options = props => {
  console.log(props.currentBird.id);

  const clickAction = (item, e) => {
    props.setTempBird(item);

    const playSound = src => {
      const audio = new Audio();
      audio.src = src;
      audio.autoplay = true;
    };

    if (props.state) {
      if (+item.id === props.currentBird.id) {
        props.setState(false);
        e.target.style.backgroundColor = 'green';
        props.setScore(props.score + scoreResult);
        scoreResult = 5;
        playSound(success);
      } else {
        e.target.style.backgroundColor = 'red';
        if (scoreResult > 0) scoreResult -= 1;
        playSound(wrong);
      }
    }
  };

  return (
    <div className="game__options">
      {props.BirdsDataItem.birds.map(item => {
        return (
          <div
            className="game__options-item"
            key={item.id}
            id={item.id}
            onClick={e => clickAction(item, e)}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default Options;
