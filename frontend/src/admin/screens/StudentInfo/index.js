import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./index.css";

const Index = () => {
  const { id } = useParams();
  // console.log(id)
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const student = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/student/${id}`
      );
      const res=response.data.student;
      console.log(res);
      setStudents(res);
    };
    student();
  }, [id]);
  return (
    <div className="Student_Batch">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main_container">
        {students.map((student) => (
          <div>
            <h1>{student.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
