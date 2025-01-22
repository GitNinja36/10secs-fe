import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css";
import Home from './Home'
import AboutGame from './components/About/AboutGame'
import AboutLifelines from './components/About/AboutLifelines'
import AboutTiebreaker from './components/About/AboutTiebreaker'
import UserAuth from './components/Authentication/UserAuth'
import OTPVerification from './components/Authentication/OTPVerification'
import Game from './components/Game/Game'
import Leaderboard from './components/leaderboard/Leaderboard.tsx';
import { RecoilRoot } from "recoil";

function App() {

    return (
        <Router>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-start-5 md:col-span-4">
                    <RecoilRoot>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about-game" element={<AboutGame />} />
                            <Route path="/about-lifelines" element={<AboutLifelines />} />
                            <Route path="/about-tiebreaker" element={<AboutTiebreaker />} />
                            <Route path="/user-auth" element={<UserAuth />} />
                            <Route path="/otp-verification" element={<OTPVerification />} />
                            <Route path="/game" element={<Game />} />
                            <Route path="/leaderboard" element={<Leaderboard />} />
                        </Routes>
                    </RecoilRoot>
                </div>
            </div>
        </Router>
    );
}

export default App
