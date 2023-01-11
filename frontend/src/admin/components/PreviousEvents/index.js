import React, { useEffect, useState } from "react";
import "./prevEvent.css";
import axios from "axios";
import { RiDeleteBinLine } from "react-icons/ri";

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

  const delEvent = async (id) => {
    await axios.delete(`http://localhost:8000/api/event/${id}`);
    window.location.reload();
  };

  return (
    <div className="Admin_events">
      <div className="main_container">
        {events.map((event) => (
          <div className="event_box" key={event.date}>
            <h1>{event.eventName}</h1>
            <div className="event_textInfo">
              <div className="eventInfo">
                <h6>Date:{event.date}</h6>
                <p>Venue:{event.venue}</p>
              </div>

              <div className="deleteEvent">
                <RiDeleteBinLine onClick={() => delEvent(event?._id)} />
              </div>
            </div>
            {/* <p>About Event: <br/>{event.description}</p> */}
            <img src={event.photo} alt={event.photo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
