import React, { useState } from "react";
import decoration from "../assets/Decoration.svg";
import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg";
import "../scss/ContactUs.scss";

function HomeContactUs() {
  const url = "https://fer-api.coderslab.pl/v1/portfolio/contact";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sentMessage, setSentMessage] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [setIsSubmit] = useState(false);
  const validate = () => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!name) {
      errors.name = "Wpisz imię!";
    } else if (name.indexOf(" ") >= 0) {
      errors.name = "Imię powinno być jednym wyrazem!";
    }
    if (!email) {
      errors.email = "Wpisz email!";
    } else if (!regex.test(email)) {
      errors.email = "To nie jest prawidłowy format email!";
    }
    if (!message) {
      errors.message = "Napisz wiadomość!";
    } else if (message.length <= 120) {
      errors.message = "Wiadomość musi zawierać co najmniej 120 znaków!";
    }
    return errors;
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(name, email, message));
    setIsSubmit(true);
    try {
      let res = fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      });

      if (res.status === 200) {
        setName("");
        setEmail("");
        setMessage("");
        setSentMessage(`Wiadomość została wysłana! Wkrótce się skontaktujemy.`);
      } else {
        setSentMessage("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="contactUs" className="contactUsMainContainer">
      <div className="contactUsMainSection">
        <p>Skontaktuj się z nami</p>
        <img src={decoration} alt="black-page-decoration"></img>
        <div className="sentMessage">
          {sentMessage ? <p>{sentMessage}</p> : null}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="fieldContainer">
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
                className={formErrors.name ? "errorInputStyle" : ""}
              />
            </label>
            <p className="uiErrorMessage">{formErrors.name}</p>
          </div>
          <div className="fieldContainer">
            <label>
              <span className="inputHeader">Wpisz swój email</span>
              <input
                type="email"
                name="email"
                placeholder="abc@xyz.pl"
                value={email}
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className={formErrors.email ? "errorInputStyle" : ""}
              />
            </label>
            <p className="uiErrorMessage">{formErrors.email}</p>
          </div>
          <div className="fieldContainerMessage">
            <label>
              <span className="inputHeader">Wpisz swoją wiadomość</span>
              <input
                type="textarea"
                name="message"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                   &#10;sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud &#10;
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                value={message}
                id="message"
                onChange={(e) => setMessage(e.target.value)}
                className={formErrors.message ? "errorInputStyle" : ""}
              />
            </label>
            <p className="uiErrorMessage">{formErrors.message}</p>
          </div>

          <div className="formSubmitContainer">
            <button
              type="submit"
              formNoValidate="formnovalidate"
              className="formSubmitButton"
            >
              Wyślij
            </button>
          </div>
        </form>
        <div className="contactFooter">
          <p>Copyright by Coders Lab</p>
          <div className="iconsContainer">
            <img src={facebook} alt="facebook-icon"></img>
            <img src={instagram} alt="instagram-icon"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContactUs;
