import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Quiz from './Quiz';

function Game() {
    const navigate = useNavigate();
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [score, setScore] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [wrongAnswers, setWrongAnswers] = useState(0);
    const [useTwoX, setUseTwoX] = useState(false);
    const [fiftyFiftyLeft, setFiftyFiftyLeft] = useState(1);
    const [twoXLeft, setTwoXLeft] = useState(1);

    const questions = [
        {
            question: "What is the capital of France?",
            options: ["London", "Paris", "Berlin", "Madrid"],
            rightOptionIdx: 1,
        },
        {
            question: "What is the capital of Germany?",
            options: ["London", "Paris", "Berlin", "Madrid"],
            rightOptionIdx: 2,
        },
        {
            question: "What is the capital of Spain?",
            options: ["London", "Paris", "Berlin", "Madrid"],
            rightOptionIdx: 3,
        },
        {
            question: "What is the capital of UK?",
            options: ["London", "Paris", "Berlin", "Madrid"],
            rightOptionIdx: 0,
        },
    ];

    const handleNextQuestion = () => {
        setCurrentQuestionIdx(currentQuestionIdx + 1);
        setUseTwoX(false);

        if (currentQuestionIdx === questions.length - 1) {
            // const gameStats: GameStats = {
            //     score,
            //     correctAnswers,
            //     wrongAnswers,
            // };

            // Navigate to the stats page and pass stats data via state
            navigate('/leaderboard');
        }
    };

    const handleOptionSelected = (isCorrect: boolean) => {
        const scoreToAdd = useTwoX ? (isCorrect ? 6 : 0) : (isCorrect ? 3 : 0);
        setScore(score + scoreToAdd);
        setCorrectAnswers(correctAnswers + (isCorrect ? 1 : 0));
        setWrongAnswers(wrongAnswers + (isCorrect ? 0 : 1));
    };

    const handleFiftyFifty = () => {
        if (fiftyFiftyLeft > 0) {
            setFiftyFiftyLeft(fiftyFiftyLeft - 1);
        }
    };

    const handleTwoX = () => {
        if (twoXLeft > 0) {
            setTwoXLeft(twoXLeft - 1);
            setUseTwoX(true);
        }
    };

    return (
        <Quiz
            question={questions[currentQuestionIdx].question}
            options={questions[currentQuestionIdx].options}
            rightOptionIdx={questions[currentQuestionIdx].rightOptionIdx}
            handleNext={handleNextQuestion}
            handleOptionSelected={handleOptionSelected}
            handleFiftyFifty={handleFiftyFifty}
            handleTwoX={handleTwoX}
            fiftyFiftyLeft={fiftyFiftyLeft}
            twoXLeft={twoXLeft}
        />
    );
}

export default Game;
