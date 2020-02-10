import React from 'react';
import sertificate from '../../utils/Sertificate-bird.pdf'

const Finish = ({ score, setFinish, setState, setCurrentStep, setScore, setTempBird }) => {

    const replay = () => {
        setFinish(true);
        setState(true);
        setCurrentStep(0);
        setScore(0);
        setTempBird('');
    }


    return (
        <div className="finish">
            <div className="finish__window">
                <h2>Поздравляем!</h2>

                <p className="finish__window-text">
                    {score === 30 ? `Поздравляю! Игра закончена.` : `Вы прошли викторину и набрали ${score} из 30 быллов.`}
                </p>
                <button
                    type="button"
                    className={score === 30 ? 'none' : "finish__btn"}

                >
                    Попробовать еще раз!
                </button>
                <a href={sertificate} className={score === 30 ? "finish__btn rel" : "finish__btn"} download>Скачать сертификат</a>
            </div>
        </div >
    );
};

export default Finish;
