import "./Sidebar.css";
import { SidebarData } from "./SidebarData";
import { SettingsOutlined} from '@mui/icons-material';

export default function Sidebar() {

  return (
    <div className="sidebar">
      <div>
        <p className="flow">Podcast Upload Flow</p>
        <ul className="sidebar-list">
          {SidebarData.map((val) => (
            <li 
            key={val.number} 
            className="row" 
            id={window.location.pathname === val.link ? "active" : ""}
            onClick={() => {window.location.pathname = val.link}}
            >
              <span id="numbering">{val.number}</span>
              <p>{val.title}</p>
            </li>
          ))}
        </ul>
        <hr/>
      </div>
      <div className="settings">
        <hr/>
        <div 
        className="row" 
        id={window.location.pathname === "/settings" ? "active" : ""}
        onClick={() => {window.location.pathname = "/settings"}}
        >
          <SettingsOutlined style={{
            backgroundColor: "#cfcad6", 
            fontSize: "0.9em", 
            padding: "8px 8px", 
            borderRadius: "50%", 
            marginRight: "10px"}}
          />
          <p>Settings</p>
        </div>
      </div>
    </div>
  )
}