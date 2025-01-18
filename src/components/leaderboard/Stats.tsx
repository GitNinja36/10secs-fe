export interface GameStats {
    score: number;
    correctAnswers: number;
    wrongAnswers: number;
}

interface Props {
    gameStats: GameStats;
}

function Stats({ gameStats }: Props) {
    return (
        <div className="card bg-warning text-primary-content p-2">
            <div className="card-body p-2">
                <h2 className="card-title">Your Game Stats</h2>
                <p>Score: {gameStats.score}</p>
                <p>Correct Answers: {gameStats.correctAnswers}</p>
                <p>Wrong Answers: {gameStats.wrongAnswers}</p>
            </div>
        </div>
    )
}

export default Stats;