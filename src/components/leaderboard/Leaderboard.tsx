import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import "./Leaderboard1.css";
import { players } from "./Player";
import TopLeaderboard from "./TopLeaderboard";
import NavMenu from "./NavMenu";
import { ifNav } from "../../store/atoms/count";

const Leaderboard: React.FC = () => {
  // const navigate = useNavigate();
  const showTopLeaderboard = useRecoilValue(ifNav);

  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
  const top3 = sortedPlayers.slice(0, 3);

  const remainingPlayers = sortedPlayers.slice(3);
  const playersPerPage = 6;

  const totalPages = Math.ceil(remainingPlayers.length / playersPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedPlayers = remainingPlayers.slice(
    (currentPage - 1) * playersPerPage,
    currentPage * playersPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="container">
      <div className="leaderboard-container">
        {/* Header */}
        {showTopLeaderboard ? <TopLeaderboard /> : <NavMenu />}
        {/* Top 3 Leaders */}
        <div className="top-leaderboard">
          {top3.map((leader, index) => (
            <div
              key={leader.id}
              className={`top-leaderboard-container ${
                index === 0
                  ? "leader-silver"
                  : index === 1
                  ? "leader-gold"
                  : "leader-bronze"
              }`}
            >
              <img
                src={leader.avatar}
                alt={leader.name}
                className="leader-avatar"
              />
              <p className="leader-name">{leader.name}</p>
              <p className="leader-score">{leader.score}</p>
            </div>
          ))}
        </div>

        {/* Other Players */}
        <div className="other-players">
          {paginatedPlayers.map((player, idx) => (
            <div key={player.id} className="player">
              <div className="player-info">
                <p className="player-rank">
                  {3 + idx + 1 + (currentPage - 1) * playersPerPage}
                </p>
                <p className="player-name">{player.name}</p>
                <p className="player-score">{player.score}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="leaderboard-footer">
          <button
            className="footer-button"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <i className="uil uil-angle-double-left"></i>
          </button>
          <span className="footer-page">
            {" "}{currentPage} {" "}
          </span>
          <button
            className="footer-button"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <i className="uil uil-angle-double-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;