import React, { useState } from "react";
import { Link } from "react-scroll/modules";
import logo from "../assets/Decoration.svg";
import "../scss/Login.scss";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [setClick] = useState(false);
  const closeMenu = () => setClick(false);
  let navigate = useNavigate();
  return (
    <div className="HomeHeaderLoginMainContainer">
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
            <li
              onClick={() => {
                navigate("/");
              }}
            >
              Start
            </li>
            <li>
              <Link
                to="aboutWhat"
                spy={true}
                smooth={true}
                offset={100}
                duration={100}
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
                offset={100}
                duration={100}
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
                offset={100}
                duration={100}
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
                offset={150}
                duration={100}
                onClick={closeMenu}
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <p>Załóż konto</p>
      <img src={logo}></img>
      <div className="HeaderLoginSilverRectangle">
        <form>
          <label>
            <span>Email</span>
            <input type="email" name="registerEmail" id="registerEmail" />
          </label>
          <label>
            <span> Hasło</span>
            <input
              type="password"
              name="registerPassword"
              id="registerPassword"
            />
          </label>
          <label>
            <span>Powtórz hasło</span>
            <input
              type="password"
              name="repeatRegisterPassword"
              id="repeatRegisterPassword"
            />
          </label>
        </form>
      </div>
      <div className="HeaderLoginButtonsContainer">
        <button
          onClick={() => {
            navigate("/Login");
          }}
        >
          Zaloguj się
        </button>
        <button>Załóż konto</button>
      </div>
    </div>
  );
};
