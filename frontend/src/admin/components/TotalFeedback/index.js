import React, { useEffect, useState } from "react";
import "../Totalstudents/totalstudents.css";
import { FcFeedback } from "react-icons/fc";
import { Link } from "react-router-dom";
import axios from 'axios'

const TotalFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    const feedback = async () => {
      const response = await axios.get(`http://localhost:8000/api/feedbacks`);
      console.log(response.data);
      setFeedbacks(response.data.count);
    };
    feedback();
  }, []);
  return (
    <Link to={`/admin/Feedbacks`}>
    <div className="Student_box">
      <h1>
        {" "}
        <FcFeedback /> {feedbacks}
      </h1>
      <h5>New Feedbacks</h5>
    </div>
    </Link>
  );
};

export default TotalFeedback;
