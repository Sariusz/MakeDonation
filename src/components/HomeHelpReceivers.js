import React, { useState } from "react";
import "../scss/HelpReceivers.scss";
import decoration from "../assets/Decoration.svg";
import HomePaginateCharity from "./HomePaginateCharity";
import HomePaginateOrganizations from "./HomePaginateOrganizations";
import HomePaginateLocalDonations from "./HomePaginateLocalDonations";
function HomeHelpReceivers() {
  //state & logic for buttons to conditionally render a certain component
  const [selectedButton, setSelectedButton] = useState(null);

  return (
    <div id="helpReceivers" className="HelpReceiversMainContainer">
      <div className="HelpReceiversTopContainer"></div>
      <p className="HelpReceiversP1">Komu pomagamy?</p>
      <img src={decoration}></img>
      <div className="HelpReceiversTopContainerButtons">
        <button
          className="TopContainerButtons"
          onClick={() => {
            setSelectedButton("Fundacjom");
          }}
        >
          Fundacjom
        </button>
        <button
          className="TopContainerButtons"
          onClick={() => {
            setSelectedButton("Organizacjom pozarządowym");
          }}
        >
          Organizacjom pozarządowym
        </button>
        <button
          className="TopContainerButtons"
          onClick={() => {
            setSelectedButton("Lokalnym zbiórkom");
          }}
        >
          Lokalnym zbiórkom
        </button>
      </div>
      <p className="HelpReceiversText">
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
        potrzebują.
      </p>
      {selectedButton == null ? <HomePaginateCharity /> : ""}
      {selectedButton == "Fundacjom" ? <HomePaginateCharity /> : null}
      {selectedButton == "Organizacjom pozarządowym" ? (
        <HomePaginateOrganizations />
      ) : null}
      {selectedButton == "Lokalnym zbiórkom" ? (
        <HomePaginateLocalDonations selected="" />
      ) : null}
    </div>
  );
}

export default HomeHelpReceivers;
