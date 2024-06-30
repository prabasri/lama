import { useEffect } from "react";
import "./SampleCard.css";

export default function SampleCard ({identifier, projectTitle, episodes, weeks, projectSymbol, color}) {

  useEffect(() => {
    document.getElementById(identifier).style.backgroundColor = color;
  }, [identifier]);

  return (
    <div className="card">
      <div className="card-symbol" id={identifier}>
        {projectSymbol}
      </div>
      <div className="card-info">
        <h3 className="project-title">{projectTitle}</h3>
        <p className="episodes">{episodes} Episodes</p>
        <p className="weeks">Last edit {weeks} week ago</p>
      </div>
    </div>
  )
}