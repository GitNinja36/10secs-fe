import { useNavigate } from "react-router-dom";
function NavMenu() {
    const navigate = useNavigate();
  return (
    <div className="navMenu_container">
      <div className="leaderboard-NavMenu">
        <div className="navMenu_items">
          {/* Home Navigation */}
          <p className="navMenu_item">
            <i
              className="uil uil-estate"
              onClick={() => {
                navigate("/");
              }}
            ></i>
          </p>
          {/* Info Navigation */}
          <p className="navMenu_item">
            <i
              className="uil uil-file-info-alt"
              onClick={() => {
                navigate("/about-tiebreaker");
              }}
            ></i>
          </p>
          {/* Trophy Navigation */}
          <p className="navMenu_item">
            <i
              className="uil uil-trophy"
              onClick={() => {
                navigate("/leaderboard");
              }}
            ></i>
          </p>
        </div>
        {/* Close Button */}
        <div className="navMenu_items-close">
          <p className="navMenu_close">
            <i className="uil uil-times"></i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NavMenu
