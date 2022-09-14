import React from "react";
import "../scss/HomeHeader/HomeThreeColumns.scss";
function HomeThreeColumns() {
  return (
    <div className="homeThreeColumnsContainer">
      <div className="firstColumnContainer">
        <p className="columnsCounter">10</p>
        <p className="columnsShortText">ODDANYCH WORKÓW</p>
        <p className="columnsLongText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div className="secondColumnContainer">
        <p className="columnsCounter">5</p>
        <p className="columnsShortText">WSPARTYCH ORGANIZACJI</p>
        <p className="columnsLongText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div className="thirdColumnContainer">
        <p className="columnsCounter">7</p>
        <p className="columnsShortText">ZORGANIZOWANYCH ZBIÓREK</p>
        <p className="columnsLongText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
    </div>
  );
}

export default HomeThreeColumns;
