import { useState,createContext } from 'react';
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import BackButton from "../../components/BackHomeButton/BackButton";
import HeroImage from "../../assets/hero.png";
import ModalEmail from "../../components/ModalAskingEmail/ModalEmail";
import ModalProject from "../../components/ModalProject/ModalProject";
import CreateProjectButton from "../../components/CreateProjectButton/CreateProjectButton";

export const UserContext = createContext();

function Home() {
  const [visibility, setVisibility] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState("");

  const handleLoad = () => {
    if(!user) {
      setVisibility(true)
    } 
  }

  return (
    <div onLoad={() => handleLoad()}>
      <UserContext.Provider value={user}>
        <Navbar settingsIcon={true}/>
      </UserContext.Provider>
      <BackButton/>
      <p className="title">Create a New Project</p>
      <img className="hero-image" src={HeroImage} alt="hero"/>
      <p className="hero-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      </p>
      <CreateProjectButton setClicked={setIsClicked}/>
      {!isLogged && <ModalEmail visibility={visibility} setVisibility={setVisibility} logged={isLogged} setLogged = {setIsLogged} setUser={setUser}/>}
      <ModalProject clicked={isClicked} setClicked={setIsClicked}/>
    </div>
  )
}

export default Home;