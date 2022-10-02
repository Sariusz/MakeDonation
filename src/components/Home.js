import React from "react";
import { HomeHeader } from "./Header";
import HomeFourSteps from "./FourSteps";
import HomeAboutUs from "./AboutUs";
import HomeHelpReceivers from "./HelpReceivers";
import HomeContactUs from "./ContactUs";
import HomeThreeColumns from "./ThreeColumns";

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
