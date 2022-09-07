import React from "react";
import ReactPaginate from "react-paginate";
import { useState } from "react";

function HomePaginateLocalDonations(props) {
  // logic for localdonations' paginations
  const localDonationsArray = [];
  localDonationsArray.push(
    <li key="L1" className="HelpReceiversListElement">
      <p className="HelpReceiversName">
        Lokalna zbiórka “Lorem Ipsum 1”
        <br></br>
        <span className="HelpReceiversGoal">
          Quis varius quam quisque id diam vel quam elementum pulvinar.
        </span>
      </p>
      <p className="HelpReceiversItems">Egestas, sed, tempus</p>
    </li>,
    <li key="L2" className="HelpReceiversListElement">
      <p className="HelpReceiversName">
        Lokalna zbiórka “Lorem Ipsum 2”
        <br></br>
        <span className="HelpReceiversGoal">
          Quis varius quam quisque id diam vel quam elementum pulvinar.
        </span>
      </p>
      <p className="HelpReceiversItems">Egestas, sed, tempus</p>
    </li>,
    <li key="L3" className="HelpReceiversListElement">
      <p className="HelpReceiversName">
        Lokalna zbiórka “Lorem Ipsum 3”
        <br></br>
        <span className="HelpReceiversGoal">
          Quis varius quam quisque id diam vel quam elementum pulvinar.
        </span>
      </p>
      <p className="HelpReceiversItems">Egestas, sed, tempus</p>
    </li>
  );
  const [localDonationsPageNumber, setlocalDonationsPageNumber] = useState(0);
  const localDonationsPerPage = 3;
  const localDonationsPagesVisited =
    localDonationsPageNumber * localDonationsPerPage;

  const displayLocalDonations = localDonationsArray
    .slice(
      localDonationsPagesVisited,
      localDonationsPagesVisited + localDonationsPerPage
    )
    .map((localDonations) => {
      return localDonations;
    });
  const localDonationsPageCount = Math.ceil(
    localDonationsArray.length / localDonationsPerPage
  );
  const changelocalDonationsPage = ({ selected }) => {
    setlocalDonationsPageNumber(selected);
  };

  return (
    <ul className="HelpReceiversList">
      {displayLocalDonations}
    </ul>
  );
}

export default HomePaginateLocalDonations;