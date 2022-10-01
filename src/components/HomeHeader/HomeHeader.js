import React from "react";
import "../../scss/Header.scss";
import { HomeHeaderRightSide } from "./HomeHeaderRightSide";
import { HomeHeaderLeftSide } from "./HomeHeaderLeftSide";

export const HomeHeader = () => {
  return (
    <div className="HomeHeader__main--container">
      <HomeHeaderRightSide />
      <HomeHeaderLeftSide />
    </div>
  );
};
