import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/BackHomeButton/BackButton";
import CreateProjectButton from "../../components/CreateProjectButton/CreateProjectButton";
import "./SampleProjects.css";
import axios from "axios";
import SampleCard from "../../components/SampleCards/SampleCard";
import { UserContext } from "../HomePage/Home";
import Navbar from "../../components/Navbar/Navbar";
import { config } from "../../App";

function SampleProjects() {

  const navigate = useNavigate();
  const user = useContext(UserContext);
  
  const [cards, setCards] = useState([]);
  const [createBtnClicked, setCreateBtnClicked] = useState(false);
  const colors = [];

  useEffect(() => {
    fetchProjects();
    if(createBtnClicked) {
      navigate('/');
    }
  }, [createBtnClicked]);

  const fetchProjects = async() => {
    try {
      const result = await axios.get(`${config.endpoint}/sample_projects`);
      console.log(result);
      setCards(result.data);
    } catch(err) {
      console.log(err);
    }
  }

  const handleClick = () => {
    navigate("/sample-projects/upload");
  }

  function getRandomColor() {
    for (let i = 0; i < 10; i++) {
      const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      colors.push(randomColor);
    }
  }
  getRandomColor();

  return (
    <div>
      <Navbar user={user} settingsIcon={true}/>
      <BackButton/>
      <div className="projects-topic">
        <p className="title">Projects</p>
        <CreateProjectButton setClicked={setCreateBtnClicked}/>
      </div>
      <div className="projects-grid">
        {cards.map((card, idx) => (
          <div onClick={()=> handleClick()} style={{textDecoration: "none"}}>
            <SampleCard 
              key={card._id}
              identifier={card._id}
              projectTitle={card.projectTitle} 
              episodes={card.episodes} 
              weeks={card.weeks} 
              projectSymbol={card.projectSymbol}
              color={colors[idx]}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SampleProjects;