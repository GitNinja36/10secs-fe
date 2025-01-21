import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import "./Leaderboard1.css";

function topLeaderboard() {
    const navigate = useNavigate();
    const [toogle, setToogle] = useState(false);
  return (
    <div className="leaderboard-header">
        <button 
            className="btn header-button" 
            onClick={() => 
                navigate("/about-tiebreaker")
            }
        >
        <i className="uil uil-info"></i>
      </button>
      <h2 className="leaderboard-title">Leaderboard</h2>
      <button className="btn header-button" onClick={() => navigate("/")}>
        <i className="uil uil-bars"></i>
      </button>
    </div>
  )
}

export default topLeaderboard
