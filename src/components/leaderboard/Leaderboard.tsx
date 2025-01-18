import React from "react";
import "./Leaderboard.css";

interface Player {
  name: string;
  score: number;
  avatar: string;
}

interface LeaderboardProps {
  players: Player[];
  onNext: () => void;
}

const Leaderboard: React.FC<LeaderboardProps> = ({ players }) => {
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
  const [first, second, third, ...rest] = sortedPlayers;

  return (
    <div className="leaderboard">
      <h2>Final Scoreboard</h2>

      {/* Podium Section */}
      <div className="podium">
        {second && (
          <div className="podium-spot second">
            <img src={second.avatar} alt={second.name} className="avatar" />
            <p className="name">{second.name}</p>
            <p className="score">{second.score} Pt</p>
          </div>
        )}

        {first && (
          <div className="podium-spot first">
            <img src={first.avatar} alt={first.name} className="avatar" />
            <p className="name">{first.name}</p>
            <p className="score">{first.score} Pt</p>
          </div>
        )}

        {third && (
          <div className="podium-spot third">
            <img src={third.avatar} alt={third.name} className="avatar" />
            <p className="name">{third.name}</p>
            <p className="score">{third.score} Pt</p>
          </div>
        )}
      </div>

      {/* Remaining Players */}
      <ul className="players-list">
        {rest.map((player, index) => (
          <li key={player.name} className="player-item">
            <span className="rank">{index + 4}</span>
            <img src={player.avatar} alt={player.name} className="avatar" />
            <span className="name">{player.name}</span>
            <span className="score">{player.score}</span>
          </li>
        ))}
      </ul>

      {/* Action Buttons */}
      <div className="actions">
        <button className="save-btn">Save</button>
        <button className="share-btn">Share</button>
      </div>
    </div>
  );
};

export default Leaderboard;