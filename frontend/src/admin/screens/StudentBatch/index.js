import React from "react";
import Sidebar from '../../components/sidebar';
import './index.css'
import Batch from '../../components/Batch'

const Index = () => {
  return (
    <div className="Student_Batch">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main_container">

      <Batch />
      
     
    </div>
    </div>
  );
};

export default Index;
