import "./exploreBtnStyles.css";
import { Link } from "react-router-dom";
function ExploreBtn() {
  return (
    <div className="exploreBtnContainer">
      <button className="explore">
        <Link to={"/destination"}>EXPLORE</Link>
      </button>
    </div>
  );
}

export default ExploreBtn;
