import React, { useEffect, useState } from "react";
import "../Totalstudents/totalstudents.css";
import { FcFeedback } from "react-icons/fc";
import axios from 'axios'

const TotalFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    const feedback = async () => {
      const response = await axios.get(`http://localhost:8000/api/feedbacks`);
      console.log(response.data.feedbacks);
      setFeedbacks(response.data.feedbacks);
    };
    feedback();
  }, []);
  return (
    <div className="Student_box">
      <h1>
        {" "}
        <FcFeedback /> {feedbacks.count}
      </h1>
      <h5>New Feedbacks</h5>
    </div>
  );
};

export default TotalFeedback;
