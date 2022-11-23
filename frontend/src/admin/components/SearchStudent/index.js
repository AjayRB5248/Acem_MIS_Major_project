import React from "react";
import "./index.css";
import { BiSearchAlt } from "react-icons/bi";

const index = () => {
  return (
    <div className="searchBox">
      <input type="text" placeholder="Search For Student.." value='' />
      <BiSearchAlt className="searchIcon" />
    </div>
  );
};

export default index;
