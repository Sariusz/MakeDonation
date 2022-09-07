import React from 'react';
import backgroundContact from "../assets/Background-Contact-Form.jpg";
import decoration from "../assets/Decoration.svg";
import "../scss/HomeHeader/HomeContactUs.scss"
function HomeContactUs(props) {
    return (
      <div id="contactUs" className="contactUsMainContainer">
        <div className="contactUsMainSection">
          <p>Skontaktuj się z nami</p>
          <img src={decoration}></img>
          <form>
            <label>
              <span className="inputHeader">Wpisz swoje imię</span>
              <input type="text" name="name" placeholder="Krzysztof" />
            </label>
            <label>
              <span className="inputHeader">Wpisz swój email</span>
              <input type="email" name="email" placeholder="abc@xyz.pl" />
            </label>
            <label>
              <span className="inputHeader">Wpisz swoją wiadomość</span>
              <input
                type="textarea"
                name="message"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
            </label>
            <input type="submit" value="Wyślij" />
          </form>
        </div>
      </div>
    );
}

export default HomeContactUs;