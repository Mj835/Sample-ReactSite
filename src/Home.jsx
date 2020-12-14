import React from "react";
import web from "./Images/Welcome-bro.svg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Hey, buddy ! 👋"
        imgsrc={web}
        visit="/project"
        btname="Get Started"
        description="Welcome to my React Site 😉"
      />
    </>
  );
};

export default Home;
