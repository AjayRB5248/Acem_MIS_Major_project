import React, { useEffect, useState } from "react";
import "./timetable.css";
import axios from "axios";

const Index = () => {
  const studentinfo = JSON.parse(localStorage.getItem("model"));
  // console.log(studentinfo.batch);
  const batch=studentinfo.batch;
  const section = studentinfo.section;
  const [routines, setRoutines] = useState([]);
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  const day = d.getDay();
  // console.log(weekday[day]);

  useEffect(() => {
    const routine = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/routine/${batch}/${section}/${weekday[day]}`
      );
      // const res=JSON.stringify(response.data.batch);
      console.log(response.data);
      
      setRoutines(response.data);
    };
    routine();
  }, []);

  return (
    <div className="timeline">
      <h5>Class Time table</h5>
      <hr />
      <div className="timetable row">
        <div className="col-3">
          <h5>{weekday[day]}</h5>
          {/* <h6>
          {this.state.date.getDate() +
            "-" +
            (this.state.date.getMonth() + 1) 
             +
            "-" +
            this.state.date.getFullYear()}
        </h6> */}
        </div>
       { (weekday[day] === "Saturday") ? (
          <h5>Happy Holiday</h5>
        ) : (
          routines.map((routine) => (
            <>
              <div className="col-3 time">
                <div className="mb-3 ">
                  <h6>7:00Am</h6>
                  <h6>8:40Am</h6>
                </div>
              </div>
              <div className="col-6">
                <div className="course d-flex justify-content-between">
                  <div>
                    <h6>Internet and Intranet</h6>
                    <p>Roomno. 303</p>
                  </div>
                  <p>Sameer Sitaula</p>
                </div>
              </div>
            </>
          ))
        )}
      </div>
      <hr />
    </div>
  );
};

export default Index;
