import { useNavigate } from "react-router-dom";
import roundLogo from "../src/assets/images/round-logo.png";
import './Home.css';

function Home() {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate("/about-game");
    };

    return (
        <div className="container">
            <div className="navbar">
                <img src={roundLogo} alt="Logo" className="navbar_logo" />
                <div className="navbar_links">
                    <a onClick={() => navigate("/")}>Home</a>
                    <a onClick={() => navigate("/leaderboard")}>Leaderboard</a>
                    <a onClick={() => navigate("/")}>About</a>
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
                    <button className="btn card_btn" onClick={handleStart}>Get Started</button>
                </div>
                <div className="mb-2"></div>
            </div>
        </div>
    );
}

export default Home;