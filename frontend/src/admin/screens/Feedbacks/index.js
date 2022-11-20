import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar";
import "./index.css";
import axios from "axios";

const Index = () => {
  // const auth = localStorage.getItem("model");
  // const id = JSON.parse( localStorage.getItem("model"))._id

  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    const feedback = async () => {
      const response = await axios.get(`http://localhost:8000/api/feedbacks`);
      // console.log(response.data.feedbacks);
      setFeedbacks(response.data.feedbacks);
    };
    feedback();
  }, []);
  return (
    <div className="feedbacks">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main_container">
        {/* <h1>Feedbacks</h1> */}
        {feedbacks.map((feedback) => {
          return (
            <div className="feedback_box" key={feedback.timestamp}>
            <div className="student_info">
            <div className="image">
              <img src={feedback.student.profile} alt={feedback.student.profile} />
              </div>
              <div className="info">
              <h3 className="name">{feedback.student.name}</h3>
              <div className="clz_info">
              <p className="batch">Batch:{feedback.student.batch}</p>
              <p className="section">section:{feedback.student.section}</p>
              </div>
              </div>
              </div>
              <h1>{feedback.TeacherName}</h1>
              <h5>Faculty:{feedback.faculty}</h5>
              <p>{feedback.feedbackMessage}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
