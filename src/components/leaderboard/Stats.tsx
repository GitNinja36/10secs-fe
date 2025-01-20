import { useNavigate } from 'react-router-dom';
import "./Stats.css";

export interface GameStats {
    score: number;
    correctAnswers: number;
    wrongAnswers: number;
}

interface Props {
    gameStats: GameStats;
}

function Stats({ gameStats }: Props) {
    const navigate = useNavigate(); // Initialize navigate function

    const goToHome = () => {
        navigate('/'); // Navigate to Home page
    };

    const goToLeaderboard = () => {
        navigate('/leaderboard'); // Navigate to Leaderboard page
    };

    return (
        <div className="container grid">
            <div className="stats_container">
                <div className="status_data">
                    <div className="card-title">
                        <h2>Your Game Stats</h2>
                    </div>
                    <div className="card-body">
                        <div className="card-score">
                            <p>Score:</p>
                            <p>{gameStats.score}</p>
                        </div>
                        <div className="correctAns card-score">
                            <p>Correct Answers:</p>
                            <p>{gameStats.correctAnswers}</p>
                        </div>
                        <div className="wrongAns card-score">
                            <p>Wrong Answers:</p>
                            <p>{gameStats.wrongAnswers}</p>
                        </div>
                    </div>
                    <div className="status_Button">
                        <button className="btn backBtn" onClick={goToHome}>
                            Home
                        </button>
                        <button className="btn frontBtn" onClick={goToLeaderboard}>
                            Leaderboard
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;