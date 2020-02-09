import React from 'react';

const Options = props => {
  // const idCurrentBird = [props.currentBird.id];

  const clickAction = event => {
    if (props.state) {
      console.log();

      if (+event.target.id === props.currentBird.id) {
        props.setState(false);
        event.target.style.backgroundColor = 'green';
      } else {
        event.target.style.backgroundColor = 'red';
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
            onClick={clickAction}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default Options;
