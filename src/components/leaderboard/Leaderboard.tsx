import React, { useState } from "react";
import "./Leaderboard.css";
import { players } from "./Player.tsx";

interface Props {
  onBack: () => void;
  onNext: () => void;
}

const Leaderboard: React.FC<Props> = ({ onBack, onNext }) => {
  // Sort players by score in descending order
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  // Top 3 players
  const top3 = sortedPlayers.slice(0, 3);

  // Remaining players for pagination
  const remainingPlayers = sortedPlayers.slice(3);
  const playersPerPage = 6;
  const totalPages = Math.ceil(remainingPlayers.length / playersPerPage);

  // Current page state (default is page 1)
  const [currentPage, setCurrentPage] = React.useState(1);

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
        <div className="leaderboard-header">
          <button className="btn leaderboard-rules-btn" onClick={onNext}>
            <i className="uil uil-info"></i>
          </button>
          <h2 className="leaderboard-title">Leaderboard</h2>
          <button className="btn header-button" onClick={onBack}>
            <i className="uil uil-bars"></i>
          </button>
        </div>

        {/* Top 3 Leaders */}
        <div className="top-leaderboard">
          {top3.map((leader, index) => (
            <div
              key={leader.id}
              className={`top-leaderboard-container ${
                index === 0
                  ? "leader-gold"
                  : index === 1
                  ? "leader-silver"
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
                <span className="player-rank">
                  {3 + idx + 1 + (currentPage - 1) * playersPerPage}
                </span>
                <img
                  src={player.avatar}
                  alt={player.name}
                  className="player-avatar"
                />
                <p className="player-name">{player.name}</p>
              </div>
              <p className="player-score">{player.score}</p>
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
            Back
          </button>
          <span className="footer-page">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="footer-button"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;