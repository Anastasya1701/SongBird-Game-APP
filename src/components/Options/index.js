import React from 'react';
import wrong from '../../sounds/wrong.mp3';
import success from '../../sounds/success.wav';

let scoreResult = 5;
const Options = ({ currentBird, setTempBird, state, setState, score, setScore, BirdsDataItem }) => {
  console.log('Подсказка для вегетарианцев', currentBird.id);
  console.log("TCL: Options -> currentBird", currentBird)

  const clickAction = (item, e) => {
    setTempBird(item);
    console.log("TCL: clickAction -> item", item)

    const playSound = src => {
      const audio = new Audio();
      audio.src = src;
      audio.autoplay = true;
    };

    if (state) {
      console.log("TCL: clickAction -> state должен быть тру ", state)
      if (+item.id === currentBird.id) {
        console.log("TCL: clickAction -> currentBird", currentBird)
        setState(false);
        e.target.style.backgroundColor = 'rgba(48, 154, 19, 0.918)';
        setScore(score + scoreResult);
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
      {BirdsDataItem.birds.map(item => {
        return (
          <div
            className="game__options-item"
            key={item.id}
            id={item.id}
            onClick={e => clickAction(item, e)}
            role="button"
            tabIndex="0"
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default Options;
