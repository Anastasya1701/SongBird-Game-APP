import React, { useState } from 'react';
import Header from './components/Header';
import Options from './components/Options';
import Quiz from './components/Quiz';
import GameInfo from './components/GameInfo';
import BirdsData from './utils/BirdsData'
import Finish from './components/Finish';
import './styles/main.scss';

const App = () => {
  const [state, setState] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [tempBird, setTempBird] = useState('');
  const [finish, setFinish] = useState(true);

  const randomBird = birds => birds[Math.floor(Math.random() * birds.length)];
  const [currentBird, setCurrentBird] = useState(
    randomBird(BirdsData[currentStep].birds)
  );



  const goNextLevel = () => {
    if (currentStep < BirdsData.length - 1) {
      setCurrentStep(currentStep + 1);
      setCurrentBird(randomBird(BirdsData[currentStep + 1].birds));

    } else {
      setFinish(false);
    }
    setState(true);
  };
  return (
    <div className="wrapper">
      <>
        <Header
          BirdsData={BirdsData}
          score={score}
          currentBird={currentBird}
          currentStep={currentStep}
        />
      </>
      {finish ? (
        <>
          <Quiz currentBird={currentBird} state={state} />
          <div className="game">
            <Options
              BirdsDataItem={BirdsData[currentStep]}
              currentBird={currentBird}
              setState={setState}
              state={state}
              setScore={setScore}
              score={score}
              setTempBird={setTempBird}
              setCurrentStep={setCurrentStep}
            />
            <GameInfo
              state={state}
              currentBird={currentBird}
              tempBird={tempBird}
            />
          </div>
          <button
            type="button"
            className={!state ? "btn orange" : "btn"}
            onClick={goNextLevel}
            disabled={state}
          >
            Next Level
          </button>
        </>
      ) : (
          <Finish />
        )}

    </div>
  );
};

export default App;
