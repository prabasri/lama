import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import PlatformCard from "../../components/PlatformCards/PlatformCard";
import "./Upload.css";
import youtube from "../../assets/youtube.png";
import spotify from "../../assets/spotify.png";
import rss from "../../assets/rss.png";
import {CloudUploadOutlined} from '@mui/icons-material';
import { createContext, useContext, useState } from "react";
import { UserContext } from "../HomePage/Home";
import Table from "../../components/Table/Table";
import Editor from "../../components/Editor/Editor";

export const ProjectsContext = createContext();

export default function Upload() {

  const user = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);
  const [projects, setProjects] = useState([]);

  const platformCards = [
    {
      icon: youtube,
      title: "Upload YouTube video",
      platform: "YouTube"
    },
    {
      icon: spotify,
      title: "Upload Spotify Podcast",
      platform: "Spotify"
    },
    {
      icon: rss,
      title: "Upload from RSS Feed",
      platform: "RSS"
    }
  ];
  console.log(projects);


  return (
    <div>
      <Navbar user={user} settingsIcon={false}/>
      <div className="container">
        <Sidebar/>
        <div className="cards-container">
          <Breadcrumbs/>
          {!isEditing ? (
          <div>
            <p className="upload-text">Upload</p>
            <ul className="cards">
              {platformCards.map((card) => (
                <li key={card.platform}>
                  <ProjectsContext.Provider value={setProjects}>
                    <PlatformCard icon={card.icon} title={card.title} platform={card.platform}/>
                  </ProjectsContext.Provider>
                </li>
              ))}
            </ul>
            {!projects.length ? (
            <>
              <p className="or-text">or</p>
              <div className="upload-area">
                <CloudUploadOutlined style={{color:"#7E22CE", fontSize: "60px"}}/>
                <p style={{color: "#49454F", fontSize: "1.5em"}}>Select a file or drag and drop here (Podcast Media or Transcription Text)</p>
                <p style={{color: "#00000066", }}>MP4, MOV, MP3, WAV, PDF, DOCX or TXT file </p>
                <button className="select-button">Select file</button>
              </div>
            </>) : (
              <Table data={projects} setEditingStatus={setIsEditing}/>
            )}
          </div>) : (
          <div>
            <Editor/>
          </div>
          )}
        </div>
      </div>
    </div>
  )
}