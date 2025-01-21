import { useState, useEffect } from 'react';
import Lifelines from './Lifelines';
import Timer from './Timer';
import './Quiz.css';

interface Props {
    question: string;
    options: string[];
    rightOptionIdx: number;
    handleNext: () => void;
    handleOptionSelected: (isCorrect: boolean) => void;
    handleFiftyFifty: () => void;
    handleTwoX: () => void;
    fiftyFiftyLeft: number;
    twoXLeft: number;
    useTwoX: boolean;
}

const getRandomWrongOptions = (rightOption: number) => {
    const allOptions = [0, 1, 2, 3];
    allOptions.splice(rightOption, 1); // Remove the right option

    // Shuffle the remaining options
    for (let i = allOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allOptions[i], allOptions[j]] = [allOptions[j], allOptions[i]];
    }

    // Select two random options
    const randomOptions = allOptions.slice(0, 2);
    return randomOptions;
};

function Quiz({
    question,
    options,
    rightOptionIdx,
    handleNext,
    handleOptionSelected,
    handleFiftyFifty,
    handleTwoX,
    fiftyFiftyLeft,
    twoXLeft,
    useTwoX
}: Props) {
    const [timeOver, setTimeOver] = useState(false);
    const [optionSelected, setOptionSelected] = useState(-1);
    const [optionsRemoved, setOptionsRemoved] = useState<number[]>
    ([]);

    useEffect(() => {
        setTimeOver(false);
        setOptionSelected(-1);
        setOptionsRemoved([]);
    }, [question]);

    const onTimeOver = () => {
        setTimeOver(true);
    };

    const eliminateTwoWrongOptions = () => {
        setOptionsRemoved(getRandomWrongOptions(rightOptionIdx));
        handleFiftyFifty();
    };

    const getOptionStyle = (idx: number) => {
        if (optionSelected === -1) {
            if (idx === rightOptionIdx && timeOver) {
                return "btn btn-success";
            } else {
                return useTwoX ? "btn btn-light-blue" : "btn default-option";
            }
        } else {
            if (idx === rightOptionIdx) {
                return "btn btn-success";
            } else if (idx === optionSelected) {
                return "btn btn-error";
            } else {
                return "btn default-option";
            }
        }
    };

    const onOptionSelected = (idx: number) => {
        if (timeOver) {
            return;
        }

        setOptionSelected(idx);
        setTimeOver(true);
        handleOptionSelected(idx === rightOptionIdx);
    };

    return (
        <div className="conatiner">
            <div className="card-body">
                <div className="card_conatiner">
                {/* Timer Section */}
                <div className="card-body_timer">
                    <div className="timer">
                        <p className="timer_count">
                            {timeOver ? "0" : <Timer totalTime={600} onTimeOver={onTimeOver} />}
                        </p>
                    </div>
                </div>

                {/* Question Section */}
                <div className="card-body_question">
                    <h3 className="card-question">{question}</h3>
                </div>

                {/* Options Section */}
                <div className="card-body_options">
                    {options.map((option, idx) =>
                        !optionsRemoved.includes(idx) ? (
                            <button
                                key={idx}
                                className={getOptionStyle(idx)}
                                onClick={() => onOptionSelected(idx)}
                            >
                                {option}
                            </button>
                        ) : null
                    )}
                </div>

                {/* Lifelines Section */}
                <div className="card-body_lifelines">
                    {timeOver ? null : (
                        <Lifelines
                            handleFiftyFifty={eliminateTwoWrongOptions}
                            handleTwoX={handleTwoX}
                            fiftyFiftyLeft={fiftyFiftyLeft}
                            twoXLeft={twoXLeft}
                        />
                    )}
                </div>

                {/* Next Button */}
                <div className="card-body_nextbtn">
                    {timeOver ? (
                        <div className="nextbtn">
                            <button
                                className="join-item btn nxt-default-option"
                                onClick={handleNext}
                            >
                                Next
                            </button>
                        </div>
                    ) : null}
                </div>
                </div>
            </div>
        </div>
    );
}

export default Quiz;