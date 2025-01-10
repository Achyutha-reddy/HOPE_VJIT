import React from "react";
import "./past.css";
import hopeimage from "../../../assets/images/HopeLogo.png";

const Past = () => {
  // Sample past events
  const pastEvents = {
    "Fri Jan 1 2025": ["New Year Celebration", "Company Party"],
    "Mon Jan 5 2025": ["Team Outing"],
    "Tue Jan 10 2025": ["Client Meeting"],
    "Sat Jan 12 2025": ["Birthday Party", "Anniversary Dinner"],
  };

  return (
    <div className="past-events-container">
      {/* Title for past events section */}
      <h2 className="past-events-title">Past Events</h2>

      {/* List of all past events */}
      <div className="all-past-events">
        {Object.keys(pastEvents).map((dateKey) => (
          <div key={dateKey} className="past-event-day">
            <h3 className="past-event-date">{dateKey}</h3>
            <ul className="past-event-list">
              {pastEvents[dateKey].map((event, index) => (
                <li key={index} className="past-event-item">
                  <img
                    src={hopeimage}
                    alt="Event Logo"
                    className="event-logo-img"
                  />
                  {event}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Past;
