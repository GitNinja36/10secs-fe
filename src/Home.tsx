import roundLogo from "../src/assets/images/round-logo.png";

import './Home.css';

interface Props {
    onStart: () => void;
}

function Home({ onStart }: Props) {
    return (
        <div className="container">
            <div className="navbar">
                <img src={roundLogo} alt="Logo" className="navbar_logo" />
                <div className="navbar_links">
                    <a href="#home">Home</a>
                    <a href="#leaderboard">Leaderboard</a>
                    <a href="#about">About</a>
                </div>
                <div className="navbar_profile">
                    <i className="uil uil-user"></i>
                </div>
            </div>
            <div className="home_container">
                <div className="mb-2"></div>
                <div className="card mb-5">
                    <div className="card_component">
                        <img src={roundLogo} alt="Game Logo" className="card_logo" />
                    </div>
                    <button className="btn card_btn" onClick={onStart}>Get Started</button>
                </div>
                <div className="mb-2"></div>
            </div>
        </div>
    );
}

export default Home;