import React from 'react';

const Finish = ({ score, setFinish }) => {
    return (
        <div className="finish">
            <div className="finish__window">
                <h2>Поздравляем!</h2>
                <p className="finish__window-text">
                    Вы прошли викторину и набрали {score} из 30 быллов
        </p>
                <button
                    type="button"
                    className="finish__btn"
                    onClick={() => setFinish(true)}
                >
                    Попробовать еще раз!
        </button>
            </div>
        </div>
    );
};

export default Finish;
