import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ModalProject.css";

function ModalProject({clicked, setClicked}) {

  const [projectName, setProjectName] = useState("");
  const [isValid, setIsValid] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(projectName) {
      setIsValid(true);
      setClicked(false);
      navigate('sample-projects');
      setProjectName("");
    } else {
      setIsValid(false);
    }
  }

  const handleCancel = () => {
    setClicked(false);
    setProjectName("");
    setIsValid(true);
  }

  if(!clicked) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <h2>Create Project</h2>
          <label htmlFor="project-input">Enter Project Name:</label>
          <br/>
          <input type="text" id= "project-input" onChange={(e) => setProjectName(e.target.value)} value={projectName} placeholder="Type here"/>
          <br/>
          {!isValid && <p className="error-msg">Project Name cannot be empty</p>}
          <div className="project-btns">
            <button className="cancel-btn" onClick={() => handleCancel()}>Cancel</button>
            <button type="submit" className="create-btn">Create</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ModalProject;