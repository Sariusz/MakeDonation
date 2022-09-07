import React from 'react';
import decoration from "../assets/Decoration.svg";
import signature from "../assets/Signature.svg";
import "../scss/HomeHeader/HomeAboutUs.scss";
function HomeAboutUs() {
    return (
      <div className="aboutUsMainContainer" id="aboutUs">
        <div className="aboutUsMainContainerLeftSide">
          <p>O nas</p>
          <img src={decoration}></img>
          <p>
            Nori grape silver beet broccoli kombu beet greens fava bean
            potato quandong celery. Bunya nuts black-eyed pea prairie
            turnip leek lentil turnip greens parsnip.
          </p>
          <img src={signature}></img>
        </div>
        <div className="aboutUsMainContainerRightSide"></div>
      </div>
    );
}

export default HomeAboutUs;