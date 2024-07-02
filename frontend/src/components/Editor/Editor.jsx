import { useState } from "react";
import "./Editor.css";
import axios from "axios";

export default function Editor({projectToEdit, setProjectToEdit}) {
  const [editedData, setEditedData] = useState("");
  const [editModeOn, setEditModeOn] = useState(false);

  const handleDiscard = () => {
    // setProjectToEdit(projectToEdit);
    setEditModeOn(false);
  }

  const handleSave = async(editedData) => {
    try {
      const editProject = await axios.patch(`http://localhost:5000/getData/${projectToEdit._id}`, {description: editedData});
      console.log(editProject);
      setEditModeOn(false);
    } catch(err) {
      console.log(err);
    }
  }
  console.log(editedData);

  return (
    <div style={{marginLeft: "40px"}}>
      <div className="edit-page-title">
        <p className="edit-box-title">Edit Description</p>
        {editModeOn ? <div>
          <button className="discard" onClick={() => handleDiscard()}>Discard</button>
          <button className="save" onClick={() => handleSave(editedData)}>Save & Exit</button>
        </div> : null}
      </div>
      <div className="text-container">
        <button className="edit-mode-btn" onClick={()=> setEditModeOn(true)}>edit mode</button>
        <p className="content-topic">Description</p>
        <textarea disabled={editModeOn ? false : true} className="textbox" onChange={(e) => setEditedData(e.target.value)}>{projectToEdit.description}</textarea>
      </div>
    </div>
  )
}