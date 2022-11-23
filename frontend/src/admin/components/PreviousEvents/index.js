import React, { useEffect, useState } from "react";
import "./prevEvent.css";
import axios from "axios";

const Index = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const event = async () => {
      const response = await axios.get("http://localhost:8000/api/prevEvents");
      console.log(response.data);
      setEvents(response.data.events);
    };
    event();
  }, []);
  return (
    <div className="Admin_events">
      <div className="main_container">
        {events.map((event) => (
          <div className="event_box" key={event.date}>
            <h1>{event.eventName}</h1>
            <h6>Date:{event.date}</h6>
            <p>Venue:{event.venue}</p>
            {/* <p>About Event: <br/>{event.description}</p> */}
            <img src={event.photo} alt={event.photo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
