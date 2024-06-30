import "./BackButton.css";
import HomeIcon from "../../assets/home-icon.png";
import { useNavigate } from "react-router-dom";

function BackButton() {

  const navigate = useNavigate();

  return (
    <div>
      <div className="back-button" onClick={() => navigate("/")}>
        <img src={HomeIcon} alt="home" className="home-icon"/>
        <p className="button-text">Back to Home</p>
      </div>
    </div>
  )
}

export default BackButton;