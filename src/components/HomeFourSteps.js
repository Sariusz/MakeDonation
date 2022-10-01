import React from "react";
import "../scss/FourSteps.scss";
import decoration from "../assets/Decoration.svg";
import icon from "../assets/Icon.png";
import icon1 from "../assets/Icon1.png";
import icon2 from "../assets/Icon2.png";
import icon3 from "../assets/Icon3.png";
import { useNavigate } from "react-router-dom";
function HomeFourSteps() {
  let navigate = useNavigate();
  return (
    <div className="HomeFourStepsContainer" id="aboutWhat">
      <div className="HomeFourStepsContainer1">
        <p>Wystarczą 4 proste kroki</p>
        <img src={decoration} alt="black-page-decoration"></img>
      </div>
      <div className="HomeFourStepsContainer2">
        <div className="HomeFourStepsContainer2--iconContainer">
          <img src={icon} alt="t-shirt-icon"></img>
          <p>Wybierz rzeczy</p>
          <p>
            ubrania, zabawki,
            <br />
            sprzęt i inne
          </p>
        </div>
        <div className="HomeFourStepsContainer2--iconContainer">
          <img src={icon1} alt="bag-icon"></img>
          <p>Spakuj je</p>
          <p>
            skorzystaj z<br /> worków na śmieci
          </p>
        </div>
        <div className="HomeFourStepsContainer2--iconContainer">
          <img src={icon2} alt="looking-for-loupe-icon"></img>
          <p>
            Zdecyduj komu
            <br /> chcesz pomóc
          </p>
          <p>
            wybierz zaufane
            <br />
            miejsce
          </p>
        </div>
        <div className="HomeFourStepsContainer2--iconContainer">
          <img src={icon3} alt="order-courier-icon"></img>
          <p>Zamów kuriera</p>
          <p>
            kurier przyjedzie
            <br />w dogodnym terminie
          </p>
        </div>
      </div>
      <div className="HomeFourStepsContainer3">
        <button
          onClick={() => {
            navigate("/Login");
          }}
          className="HomeFourStepsContainer3--button"
        >
          ODDAJ<br></br> RZECZY
        </button>
      </div>
    </div>
  );
}

export default HomeFourSteps;
