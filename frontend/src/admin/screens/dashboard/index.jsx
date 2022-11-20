import React from "react";
import "./dashboard.css";
import Sidebar from '../../components/sidebar'
import Totalstudents from "../../components/Totalstudents";
import TotalFeedback from "../../components/TotalFeedback";
import Chart from '../../components/Chart'
import Event from '../../components/Events'

const Index = () => {
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
          <Chart />

        </div>
      </div>
    </div>
  );
};

export default Index;
