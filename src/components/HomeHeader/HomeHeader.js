import React from "react";
import '../../scss/HomeHeader/HomeHeader.scss'
import { HomeHeaderRightSide } from "./HomeHeaderRightSide";
import { HomeHeaderLeftSide} from "./HomeHeaderLeftSide";


export const HomeHeader = () => {
    return (
      <div className="HomeHeader__main--container" id="home">
        <HomeHeaderRightSide />
        <HomeHeaderLeftSide />
      </div>
    );
}