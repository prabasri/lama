import "./Navbar.css";
import Logo from "../../assets/directright.png";
import SettingsIcon from "../../assets/settings-icon.png";
import BellIcon from "../../assets/bell-icon.png";
import UserProfile from "../../assets/user.png";
import { UserContext } from "../../pages/HomePage/Home";
import { useContext } from "react";

export default function Navbar({user, settingsIcon}) {

  const userUsingHook = useContext(UserContext);
  console.log(userUsingHook)
  return (
    <div className="navbar">
      <div className="brand">
        <img src={Logo} alt="logo" />
        <p className="brand-name">LAMA.</p>
      </div>
      <div className="menu">
        {(userUsingHook || user) && <img src={UserProfile} alt="user-image" className="user-image"/>}
        {settingsIcon && <img src={SettingsIcon} alt="settings-icon" className="settings-icon"/>}
        <img src={BellIcon} alt="bell-icon" className="bell-icon"/>
      </div>
    </div>
  )
}