import { useState } from "react";
import ModalUpload from "../ModalUpload/ModalUpload";
import "./PlatformCard.css";

export default function PlatformCard({icon, title, platform}) {
  const [platformCardClicked, setPlatformCardClicked] = useState(false);

  return (
    <div>
      <div className="platform-card" onClick={() => setPlatformCardClicked(true)}>
        <img className="card-icon" src={icon} alt="icon"/>
        <div className="platform-card-info">
          <p>{title}</p>
        </div>
      </div>
      {platformCardClicked && <ModalUpload platformCardStatus={setPlatformCardClicked} platform={platform} icon={icon}/>}
    </div>
  )
}