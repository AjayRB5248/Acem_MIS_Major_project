import React from "react";
import Sidebar from "../sidebar";
import './index.css'
import Batch from '../components/Batch'

const index = () => {
  return (
    <div className="Student_Batch">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main_container">

      <Batch batch='2074'/>
      <Batch batch='2075'/>
      <Batch batch='2076'/>
      <Batch batch='2077'/>
      <Batch batch='2078'/>
      <Batch batch='2079'/>
     
    </div>
    </div>
  );
};

export default index;
