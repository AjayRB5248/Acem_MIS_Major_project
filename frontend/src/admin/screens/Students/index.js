import React, { useEffect, useState } from "react";
import Sidebar from '../../components/sidebar'
import axios from 'axios'
import { useParams } from "react-router-dom";
import './index.css'
import {Link} from 'react-router-dom'

const Index = () => {
    const { batch, section } = useParams();
    const [students, setStudents] = useState([]);
    useEffect(() => {
      const student = async () => {
        const response = await axios.get(`http://localhost:8000/api/students/${batch}/${section}`);
        // console.log(response.data);
        setStudents(response.data);
      };
      student();
    }, [batch,section]);
  return (
    <div className="Student_Batch">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main_container">
{
    students.map((student) => (
        <>
        <Link to={`/admin/Student_Batch/${student.batch}/${student.section}/${student._id}`}>
        <div className="student_box" key={student.name}>
            <div className="student_info">
            <div className="student_image">
              <img src={student.profile} alt={student.profile} />
              </div>
              <div className="info">
              <h3 className="name">{student.name}</h3>
              <div className="clz_info">
              <p className="batch">Batch:{student.batch}</p>
              <p className="section">section:{student.section}</p>
              </div>
              </div>
              </div>
            </div>
            </Link>
       </>))
}
    </div>
    </div>
  );
};

export default Index;
