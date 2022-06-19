import React from "react";
import Navbar from "../../layout/Navbar";
import WCTAFooter from "../../layout/WCTAFooter";
import Departments from "./Departments";
import Recruitment from "./Recruitment";
import Together from "./Together";

const Career = () => {
  return (
    <div>
      <Navbar />
      <Together />
      <Recruitment />
      <Departments />
      <WCTAFooter />
    </div>
  );
};

export default Career;
