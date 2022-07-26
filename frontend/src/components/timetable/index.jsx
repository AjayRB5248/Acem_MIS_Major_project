import React from "react";
import "./timetable.css";

const index = () => {
  return (
    <div className="timeline">
      <h5>Class Time table</h5>
      <hr />
      <div className="timetable row">
        <div className="col-3">
          <h5>Today</h5>
          {/* <h6>
          {this.state.date.getDate() +
            "-" +
            (this.state.date.getMonth() + 1) 
             +
            "-" +
            this.state.date.getFullYear()}
        </h6> */}
        </div>
        <div className="col-3 time">
          <div className="mb-3 ">
            <h6>07:00</h6>
            <h6>07:50</h6>
          </div>
          <div className="mb-3">
            <h6>07:50</h6>
            <h6>8:40</h6>
          </div>
          <div className="mb-3">
            <h6>08:40</h6>
            <h6>10:20</h6>
          </div>
          <div className="mb-3">
            <h6>10:20</h6>
            <h6>11:10</h6>
          </div>
          <div className="mb-3">
            <h6>11:10</h6>
            <h6>12:50</h6>
          </div>
          <div className="mb-3">
            <h6>12:50</h6>
            <h6>14:30</h6>
          </div>
        </div>
        <div className="col-6">
          <div className="course d-flex justify-content-between">
            <div>
              <h6>CN</h6>
              <p>Roomno. 303</p>
            </div>
            <p>Sameer Sitaula</p>
          </div>
          <div className="course d-flex justify-content-between">
            <div>
              <h6>DS</h6>
              <p>Roomno. 303</p>
            </div>
            <p>Pesal Rai</p>
          </div>
          <div className="course d-flex justify-content-between">
            <div>
              <h6>Org & Management</h6>
              <p>Roomno. 303</p>
            </div>
            <p>Prof. SKj</p>
          </div>
          <div className="course d-flex justify-content-between">
            <div>
              <h6>Break...</h6>
              <p>Canteen</p>
            </div>
            <p></p>
          </div>
          <div className="course d-flex justify-content-between">
            <div>
              <h6>Enterprise Computing</h6>
              <p>Roomno. 303</p>
            </div>
            <p>Dipak</p>
          </div>
          <div className="course d-flex justify-content-between">
            <div>
              <h6>Enterprise Computing</h6>
              <p>Roomno. 303</p>
            </div>
            <p>Dipak</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default index;
