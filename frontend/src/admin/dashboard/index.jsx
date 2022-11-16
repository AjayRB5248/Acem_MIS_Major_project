import React from "react";
import "./dashboard.css";
import Sidebar from "../sidebar/index.jsx";
import Totalstudents from "../components/Totalstudents/totalStudents";
import TotalFeedback from "../components/TotalFeedback";
import Chart from "../components/Chart";
import Event from '../components/Events'

const dashboard = () => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main">
        <div className="small_components">
          <Totalstudents />
          <TotalFeedback />
          <Event/>
        </div>

        <div className="big_components">
          <Chart />

        </div>
      </div>
    </div>
  );
};

export default dashboard;
