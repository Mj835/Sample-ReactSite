import React from "react";
import web from "./Images/About me-amico.svg";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
        description="So, Checkout my portfolio to know more"
        link="SMJ Developer"
      />
    </>
  );
};

export default About;
