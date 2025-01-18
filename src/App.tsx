import { useState, ReactElement } from 'react'
import "./App.css";
import Home from './Home'
import AboutGame from './components/About/AboutGame'
import AboutLifelines from './components/About/AboutLifelines'
import AboutTiebreaker from './components/About/AboutTiebreaker'
import UserAuth from './components/Authentication/UserAuth'
import OTPVerification from './components/Authentication/OTPVerification'
import Game from './components/Game/Game'
import Stats from './components/leaderboard/Stats'
import Leaderboard from './components/leaderboard/Leaderboard';

function App() {
    const [currentComponentIdx, setCurrentComponentIdx] = useState(0);
    const [gameStats, setGameStats] = useState({ score: 0, correctAnswers: 0, wrongAnswers: 0 });

    const moveToNextComponent = () => {
        setCurrentComponentIdx(currentComponentIdx + 1);
    }

    const moveToHomeComponent = () => {
        setCurrentComponentIdx(currentComponentIdx % 1);
    }

    const moveToPrevComponent = () => {
        setCurrentComponentIdx(currentComponentIdx - 1);
    }

    const players = [
        { name: 'Player 1', score: 100, avatar: 'avatar1.png' },
        { name: 'Player 2', score: 80, avatar: 'avatar2.png' },
        { name: 'Player 3', score: 60, avatar: 'avatar3.png' },
        // Add more players as needed
      ];

    const idxToComponent: Record<number, ReactElement> = {
        0: <Home onStart={moveToNextComponent} />,
        1: <AboutGame onBack={moveToPrevComponent} onNext={moveToNextComponent} />,
        2: <AboutLifelines onBack={moveToPrevComponent} onNext={moveToNextComponent} />,
        3: <AboutTiebreaker onBack={moveToPrevComponent} onNext={moveToNextComponent} />,
        4: <UserAuth handleSubmit={moveToNextComponent} />,
        5: <OTPVerification handleVerify={moveToNextComponent} />,
        6: <Game showStats={moveToNextComponent} setStats={setGameStats} />,
        7: <Stats gameStats={gameStats} onBack={moveToHomeComponent} onNext={moveToNextComponent} />,
        8: <Leaderboard players={players} onNext={moveToNextComponent}/>
    }

    return (
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-start-5 md:col-span-4">
            {idxToComponent[currentComponentIdx]}
          </div>
        </div>
    )
}

export default App
