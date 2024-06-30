import "./CreateProjectButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

export default function CreateProjectButton({setClicked}) {
  return (
    <div>
      <button className="create-project-btn" onClick={() => setClicked(true)}>
        <FontAwesomeIcon icon={faCirclePlus} style={{marginRight: 10}}/>
        Create New Project
      </button>
    </div>
  )
}