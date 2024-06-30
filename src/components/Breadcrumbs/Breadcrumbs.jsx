import "./Breadcrumbs.css";
import HomeIcon from "../../assets/home.png";
import { useLocation, Link } from "react-router-dom";

export default function Breadcrumbs() {

  const location = useLocation();
  let currentLink = '';

  let crumbs = location.pathname.split("/").filter((crumb) => crumb !== "").map((crumb) => {
    currentLink += `/${crumb}`

    return (
      <div className="crumb" id={window.location.pathname === currentLink ? "active" : ""} key={crumb}>
        <Link to={currentLink}>{'/ '}{crumb}</Link>
      </div>
    )
  })

  return (
    <div className="breadcrumbs">
      <img className="crumb-image" src={HomeIcon} alt="home-icon" onClick={() => {window.location.pathname = "/"}} key="home"/>
      {crumbs}
    </div>
  )
}