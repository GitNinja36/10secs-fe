import "./Stats.css";
export interface GameStats {
    score: number;
    correctAnswers: number;
    wrongAnswers: number;
}

interface Props {
    gameStats: GameStats;
    onBack: () => void;
    onNext: () => void;
}


function Stats({ gameStats, onBack, onNext  }: Props) {
    return (
        <div className="container grid">
            <div className="stats_container">
                <div className="status_data">
                    <h2 className="card-title">
                        Your Game Stats
                    </h2>
                    <div className="card-body">
                            <div className="score card-score">
                            <p>
                                Score: 
                            </p>
                            <p>
                                {gameStats.score}
                            </p>
                            </div>
                            <div className="correctAns card-score">
                            <p>
                                Correct Answers: 
                            </p>
                            <p>
                                {gameStats.correctAnswers}
                            </p>
                            </div>
                            <div className="wrongAns card-score">
                            <p>
                            Wrong Answers: 
                            </p>
                            <p>
                                {gameStats.wrongAnswers}
                            </p>
                            </div>
                        <div>
                        <div>
                    </div>
                </div>
                    </div>
                    <div className="status_Button">
                        <button className="btn" onClick={onBack}>
                            Home
                        </button>
                        <button className="btn" onClick={onNext}>
                            Leaderboard 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats;