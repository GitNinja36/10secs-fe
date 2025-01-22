import { useNavigate } from "react-router-dom";
import "./Leaderboard1.css";
import { useSetRecoilState } from "recoil";
import { ifNav } from "../../store/atoms/count"; 

function topLeaderboard() {
    const navigate = useNavigate();
    const setIfNav = useSetRecoilState(ifNav);
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
      <button className="btn header-button" >
        <i className="uil uil-bars" onClick={() => setIfNav(false)}></i>
      </button>
    </div>
  )
}
export default topLeaderboard
