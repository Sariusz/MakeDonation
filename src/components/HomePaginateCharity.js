import React from "react";
import ReactPaginate from "react-paginate";
import { useState } from "react";
function HomePaginateCharity() {
  // logic for charities' paginations
  const charityArray = [];
  charityArray.push(
    <li key="C1" className="HelpReceiversListElement">
      <p className="HelpReceiversName">
        Fundacja "Dbam o Zdrowie"<br></br>
        <span className="HelpReceiversGoal">
          Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.
        </span>
      </p>
      <p className="HelpReceiversItems">
        ubrania, jedzenie, sprzęt AGD, meble, zabawki
      </p>
    </li>,
    <li key="C2" className="HelpReceiversListElement">
      <p className="HelpReceiversName">
        Fundacja “Dla dzieci”<br></br>
        <span className="HelpReceiversGoal">
          Cel i misja: Pomoc dzieciom z ubogich rodzin.
        </span>
      </p>
      <p className="HelpReceiversItems">ubrania, meble, zabawki</p>
    </li>,
    <li key="C3" className="HelpReceiversListElement">
      <p className="HelpReceiversName">
        Fundacja “Bez domu”
        <br></br>
        <span className="HelpReceiversGoal">
          Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.
        </span>
      </p>
      <p className="HelpReceiversItems">ubrania, jedzenie, ciepłe koce</p>
    </li>,
    <li key="C4" className="HelpReceiversListElement">
      <p className="HelpReceiversName">
        Fundacja “Lorem Ipsum 1”
        <br></br>
        <span className="HelpReceiversGoal">
          Quis varius quam quisque id diam vel quam elementum pulvinar.
        </span>
      </p>
      <p className="HelpReceiversItems">Egestas, sed, tempus</p>
    </li>,
    <li key="C5" className="HelpReceiversListElement">
      <p className="HelpReceiversName">
        Fundacja “Lorem Ipsum 2”
        <br></br>
        <span className="HelpReceiversGoal">
          Quis varius quam quisque id diam vel quam elementum pulvinar.
        </span>
      </p>
      <p className="HelpReceiversItems">Egestas, sed, tempus</p>
    </li>,
    <li key="C6" className="HelpReceiversListElement">
      <p className="HelpReceiversName">
        Fundacja “Lorem Ipsum 3”
        <br></br>
        <span className="HelpReceiversGoal">
          Quis varius quam quisque id diam vel quam elementum pulvinar.
        </span>
      </p>
      <p className="HelpReceiversItems">Egestas, sed, tempus</p>
    </li>,
    <li key="C7" className="HelpReceiversListElement">
      <p className="HelpReceiversName">
        Fundacja “Lorem Ipsum 4”
        <br></br>
        <span className="HelpReceiversGoal">
          Quis varius quam quisque id diam vel quam elementum pulvinar.
        </span>
      </p>
      <p className="HelpReceiversItems">Egestas, sed, tempus</p>
    </li>,
    <li key="C8" className="HelpReceiversListElement">
      <p className="HelpReceiversName">
        Fundacja “Lorem Ipsum 5”
        <br></br>
        <span className="HelpReceiversGoal">
          Quis varius quam quisque id diam vel quam elementum pulvinar.
        </span>
      </p>
      <p className="HelpReceiversItems">Egestas, sed, tempus</p>
    </li>,
    <li key="C9" className="HelpReceiversListElement">
      <p className="HelpReceiversName">
        Fundacja “Lorem Ipsum 6”
        <br></br>
        <span className="HelpReceiversGoal">
          Quis varius quam quisque id diam vel quam elementum pulvinar.
        </span>
      </p>
      <p className="HelpReceiversItems">Egestas, sed, tempus</p>
    </li>
  );
  const [charityPageNumber, setCharityPageNumber] = useState(0);
  const charitiesPerPage = 3;
  const pagesVisited = charityPageNumber * charitiesPerPage;

  const displayCharities = charityArray
    .slice(pagesVisited, pagesVisited + charitiesPerPage)
    .map((charity) => {
      return charity;
    });
  const pageCount = Math.ceil(charityArray.length / charitiesPerPage);
  const changePage = ({ selected }) => {
    setCharityPageNumber(selected);
  };
  return (
    <ul className="HelpReceiversList">
      {displayCharities}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </ul>
  );
}

export default HomePaginateCharity;
