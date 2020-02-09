import React from 'react';

let scoreResult = 5;
const Options = props => {
  console.log(props.currentBird.id);

  const clickAction = (item, e) => {
    props.setTempBird(item);
    console.log('пришло');

    if (props.state) {
      if (+item.id === props.currentBird.id) {
        props.setState(false);
        e.target.style.backgroundColor = 'green';
        props.setScore(props.score + scoreResult);
        scoreResult = 5;
        console.log('совпадение', scoreResult);
      } else {
        console.log('результат уменьшился', scoreResult);
        e.target.style.backgroundColor = 'red';
        if (scoreResult > 0) scoreResult -= 1;
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
