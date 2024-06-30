import { useContext, useEffect, useState } from "react";
import "./ModalUpload.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ProjectsContext } from "../../pages/UploadPage/Upload";

export default function ModalUpload({platformCardStatus, platform, icon}) {

  const setProjects = useContext(ProjectsContext);
  const [content, setContent] = useState({name: "", description: ""});
  const [isNameValid, setIsNameValid] = useState(true);
  const [isDefValid, setIsDefValid] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    let {name, value} = e.target;
    setContent(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!content.name) {
      setIsNameValid(false);
    }
    else if(!content.description) {
      setIsNameValid(true);
      setIsDefValid(false)
    }
    else {
      try {
        await axios.post("http://localhost:3000/uploadedData", content);
      } catch(err) {
        console.log(err)
      }
      platformCardStatus(false);
      navigate('/sample-projects/upload');
    }
  }

  const fetchData = async() => {
    try {
      const response = await axios.get("http://localhost:3000/getData");
      setProjects(response.data);
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <form onSubmit={(e) => handleSubmit(e)}>
          <h2 id={platform} >
            <span className="close" onClick={() => platformCardStatus(false)}>&#10005;</span>
            <div className="modal-title">
              <img src={icon} alt={platform} className="icon"/>
              <span>Upload from {platform}</span>
            </div>
          </h2>
          <label htmlFor="content-name">Name</label>
          <br/>
          <input type="text" id= "content-name" onChange={(e) => handleChange(e)} name="name" placeholder="Type name"/>
          {!isNameValid && <p className="error-msg">Project Name cannot be empty</p>}
          <br/>
          <label htmlFor="content-def">Description</label>
          <br/>
          <input type="text" id= "content-def" onChange={(e) => handleChange(e)} name="description" placeholder="Type description"/>
          <br/>
          {!isDefValid && <p className="error-msg">Project Description cannot be empty</p>}
          <button type="submit" className="upload-btn">Upload</button>
        </form>
      </div>
    </div>
  )
}