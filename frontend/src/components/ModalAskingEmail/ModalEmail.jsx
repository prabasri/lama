import { useState, useEffect } from "react";
import "./ModalEmail.css";
import axios from "axios";

function ModalEmail({visibility, setVisibility, logged, setLogged, setUser}) {

  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUser();
    let matchingUser = users.find((val) => val.email === email)
    setUser(matchingUser);
  }, [email]);
  

  const handleSubmit = async(e) => {
    e.preventDefault();

    if(email) {
      setIsValid(true);
      try {
        await axios.post("http://localhost:5000/", {email: email})
      } catch(err) {
        console.log(err);
      }
      setVisibility(false);
      setLogged(true);
      setEmail("");
    } else {
      setIsValid(false);
    }
  }

  const fetchUser = async() => {
    try {
      const result = await axios.get('http://localhost:5000/getUser');
      console.log(users);
      setUsers(result.data);
    } catch(err) {
      console.log(err);
    }
  }

  if(!visibility || logged) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <form onSubmit={(e) => handleSubmit(e)}>
          <h2>Login</h2>
          <label htmlFor="emailID">Enter your Email ID:</label>
          <br/>
          <input type="email" id="emailID" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Type here"/>
          <br/>
          {!isValid && <p className="error-msg">Email ID cannot be empty</p>}
          <input type="submit" className="login-btn"/>
        </form>
      </div>
    </div>
  )
}

export default ModalEmail;