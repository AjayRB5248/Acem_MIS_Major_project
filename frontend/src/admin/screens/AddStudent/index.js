import React from "react";
import Sidebar from '../../components/sidebar'
// import AddStudent from "./AddStudent";
import "./index.css";

const index = () => {
  return (
    <div className="addStudent">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main_container">
        {/* <AddStudent/> */}
      </div>
    </div>
  );
};

export default index;
