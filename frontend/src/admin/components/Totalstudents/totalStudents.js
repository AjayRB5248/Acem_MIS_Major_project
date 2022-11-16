import React from "react";
import "./totalstudents.css";
import { FaUserGraduate } from "react-icons/fa";

const totalStudents = () => {
  return (
    <div className="Student_box">
      <h1>
        {" "}
        <FaUserGraduate /> 1200
      </h1>
      <h5>Student</h5>
    </div>
  );
};

export default totalStudents;
