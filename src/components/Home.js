import React from "react";
import { HomeHeader } from "./HomeHeader/HomeHeader";
import HomeFourSteps from "./HomeFourSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeHelpReceivers from "./HomeHelpReceivers";
import HomeContactUs from "./HomeContactUs";
import HomeThreeColumns from "./HomeThreeColumns";


export const Home = () => {
  return (
    <div id="home">
      <HomeHeader></HomeHeader>
      <HomeThreeColumns></HomeThreeColumns>
      <HomeFourSteps></HomeFourSteps>
      <HomeAboutUs />
      <HomeHelpReceivers />
      <HomeContactUs></HomeContactUs>
    </div>
  );
};
