import React from "react";
import { useState } from "react";
import { Link } from "react-scroll/modules";
import "../../scss/HeaderNavMenu.scss";
import decoration from "../../assets/Decoration.svg";
import { useNavigate } from "react-router-dom";
export const HomeHeaderRightSide = () => {
  let navigate = useNavigate();
  const [setClick] = useState(false);
  const closeMenu = () => setClick(false);

  return (
    <div className="HomeHeader__right--side">
      <nav>
        <div className="HomeHeaderLoginButtons">
          <button
            onClick={() => {
              navigate("/Login");
            }}
          >
            Zaloguj
          </button>
          <button
            onClick={() => {
              navigate("/Register");
            }}
          >
            Załóż konto
          </button>
        </div>
        <div className="HomeHeaderLinkList">
          <ul>
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={400}
                onClick={closeMenu}
              >
                Start
              </Link>
            </li>
            <li>
              <Link
                to="aboutWhat"
                spy={true}
                smooth={true}
                offset={-200}
                duration={400}
                onClick={closeMenu}
              >
                O co chodzi
              </Link>
            </li>
            <li>
              <Link
                to="aboutUs"
                spy={true}
                smooth={true}
                offset={0}
                duration={400}
                onClick={closeMenu}
              >
                O nas{" "}
              </Link>
            </li>
            <li>
              <Link
                to="helpReceivers"
                spy={true}
                smooth={true}
                offset={0}
                duration={400}
                onClick={closeMenu}
              >
                Fundacja i organizacje
              </Link>
            </li>
            <li>
              <Link
                to="contactUs"
                spy={true}
                smooth={true}
                offset={85}
                duration={400}
                onClick={closeMenu}
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="HomeHeaderMiddleText">
        <p>Zacznij pomagać!</p>
        <p> Oddaj niechciane rzeczy w zaufane ręce</p>
        <img src={decoration} alt="black-page-decoration"></img>
        <div className="HomeHeaderButtons">
          <button
            onClick={() => {
              navigate("/Login");
            }}
          >
            <span>
              ODDAJ<br></br>RZECZY
            </span>
          </button>
          <button
            onClick={() => {
              navigate("/Login");
            }}
          >
            <span>
              ZORGANIZUJ<br></br>ZBIÓRKĘ
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
