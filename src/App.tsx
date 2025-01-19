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
// import Leaderboard from './components/leaderboard/Leaderboard.tsx';

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

    const idxToComponent: Record<number, ReactElement> = {
        0: <Home onStart={moveToNextComponent} />,
        1: <AboutGame onBack={moveToPrevComponent} onNext={moveToNextComponent} />,
        2: <AboutLifelines onBack={moveToPrevComponent} onNext={moveToNextComponent} />,
        3: <UserAuth handleSubmit={moveToNextComponent} />,
        4: <OTPVerification handleVerify={moveToNextComponent} />,
        5: <Game showStats={moveToNextComponent} setStats={setGameStats} />,
        6: <Stats gameStats={gameStats} onBack={moveToHomeComponent} onNext={moveToNextComponent} />,
        // 7: <Leaderboard  onBack={moveToHomeComponent} onNext={moveToNextComponent}/>,
        7: <AboutTiebreaker onBack={moveToPrevComponent} onNext={moveToNextComponent} />,
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
