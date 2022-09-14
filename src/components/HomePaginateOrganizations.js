import React from "react";
import ReactPaginate from "react-paginate";
import { useState } from "react";

function HomePaginateOrganizations() {
  // logic for organizations' paginations
  const organizationsArray = [];
  organizationsArray.push(
    <li key="O1" className="HelpReceiversListElement">
      <p className="HelpReceiversName">
        Organizacja “Lorem Ipsum 1”
        <br></br>
        <span className="HelpReceiversGoal">
          Quis varius quam quisque id diam vel quam elementum pulvinar.
        </span>
      </p>
      <p className="HelpReceiversItems">Egestas, sed, tempus</p>
    </li>,
    <li key="O2" className="HelpReceiversListElement">
      <p className="HelpReceiversName">
        Organizacja “Lorem Ipsum 2”
        <br></br>
        <span className="HelpReceiversGoal">
          Quis varius quam quisque id diam vel quam elementum pulvinar.
        </span>
      </p>
      <p className="HelpReceiversItems">Egestas, sed, tempus</p>
    </li>,
    <li key="O3" className="HelpReceiversListElement">
      <p className="HelpReceiversName">
        Organizacja “Lorem Ipsum 3”
        <br></br>
        <span className="HelpReceiversGoal">
          Quis varius quam quisque id diam vel quam elementum pulvinar.
        </span>
      </p>
      <p className="HelpReceiversItems">Egestas, sed, tempus</p>
    </li>,
    <li key="04" className="HelpReceiversListElement">
      <p className="HelpReceiversName">
        Organizacja “Lorem Ipsum 4”
        <br></br>
        <span className="HelpReceiversGoal">
          Quis varius quam quisque id diam vel quam elementum pulvinar.
        </span>
      </p>
      <p className="HelpReceiversItems">Egestas, sed, tempus</p>
    </li>,
    <li key="O5" className="HelpReceiversListElement">
      <p className="HelpReceiversName">
        Organizacja “Lorem Ipsum 5”
        <br></br>
        <span className="HelpReceiversGoal">
          Quis varius quam quisque id diam vel quam elementum pulvinar.
        </span>
      </p>
      <p className="HelpReceiversItems">Egestas, sed, tempus</p>
    </li>,
    <li key="O6" className="HelpReceiversListElement">
      <p className="HelpReceiversName">
        Organizacja “Lorem Ipsum 6”
        <br></br>
        <span className="HelpReceiversGoal">
          Quis varius quam quisque id diam vel quam elementum pulvinar.
        </span>
      </p>
      <p className="HelpReceiversItems">Egestas, sed, tempus</p>
    </li>
  );
  const [organizationPageNumber, setOrganizationsPageNumber] = useState(0);
  const organizationsPerPage = 3;
  const organizatonsPagesVisited =
    organizationPageNumber * organizationsPerPage;

  const displayOrganizations = organizationsArray
    .slice(
      organizatonsPagesVisited,
      organizatonsPagesVisited + organizationsPerPage
    )
    .map((organizations) => {
      return organizations;
    });
  const organizationsPageCount = Math.ceil(
    organizationsArray.length / organizationsPerPage
  );
  const changeOrganizationsPage = ({ selected }) => {
    setOrganizationsPageNumber(selected);
  };

  return (
    <ul className="HelpReceiversList">
      {displayOrganizations}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={organizationsPageCount}
        onPageChange={changeOrganizationsPage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </ul>
  );
}

export default HomePaginateOrganizations;
