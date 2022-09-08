import React, {useState,useEffect} from 'react';
import backgroundContact from "../assets/Background-Contact-Form.jpg";
import decoration from "../assets/Decoration.svg";
import "../scss/HomeHeader/HomeContactUs.scss";
function HomeContactUs() {
const url = "https://fer-api.coderslab.pl/v1/portfolio/contact";
 const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sentMessage, setSentMessage] = useState("");
  const [error, setError] = useState(null);
  
  let handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      let res = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message //zrobic json.stringify 
        }),
      });
       
      if (res.status === 200) {
        setName("");
        setEmail("");
        setMessage("");
        setSentMessage("Wiadomość została wysłana! Wkrótce się skontaktujemy.");
      } else {
        setSentMessage("Coś poszło nie tak.");
      }
    } catch (err) {
      console.log(err);
    }
  };
  
 /*
  function onChangeUsername(e) {
    setUsername(e.target.value);
  }
  function onChangeEmail(e) {
    setEmail(e.target.value);
  }
  function onChangeMessage(e) {
   setMessage(e.target.value)
 }
function onSubmit(e) {
  e.preventDefault();
  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("message", message);
  }
  const handleClick = () => {
  
}

  localStorage.clear();
  /*function onGetData() {
    if (onSubmit) {
      console.log(localStorage.getItem("username"));
      console.log(localStorage.getItem("email"));
      console.log(localStorage.getItem("message"));
      localStorage.clear()
    }
  }*/
    return (
      <div id="contactUs" className="contactUsMainContainer">
        <div className="contactUsMainSection">
          <p>Skontaktuj się z nami</p>
          <img src={decoration}></img>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                <span className="inputHeader">Wpisz swoje imię</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Krzysztof"
                  value={name}
                  id="username"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </label>
            </div>
            <div>
              <label>
                <span className="inputHeader">Wpisz swój email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="abc@xyz.pl"
                  value={email}
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                <span className="inputHeader">Wpisz swoją wiadomość</span>
                <input
                  type="textarea"
                  name="message"
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  value={message}
                  id="message"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </label>
            </div>
            <button type="submit">Wyślij</button>
            <div className="sentMessage">
              {sentMessage ? <p>{sentMessage}</p> : null}
            </div>
          </form>
        </div>
      </div>
    );
}

export default HomeContactUs;