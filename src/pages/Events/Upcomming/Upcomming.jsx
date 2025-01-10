import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./upcomming.css";
import hopeimage from "../../../assets/images/HopeLogo.png";

const Upcomming = () => {
  // State to store the currently selected date and upcoming events
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Upcoming events in a dictionary format with dates as keys and events as values
  const upcomingEvents = {
    "Fri Jan 10 2025": ["Meeting with Team", "Doctor's Appointment"],
    "Sat Jan 20 2025": ["Project Deadline"],
    "Mon Jan 25 2025": ["Family Gathering"],
    "Fri Jan 30 2025": ["Wedding Anniversary", "Work Deadline"],
  };

  // Event handler when the calendar date changes
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Format the date to match the dictionary keys
  const formatDate = (date) => {
    return date.toDateString();
  };

  // Get events for the selected date
  const selectedDateKey = formatDate(selectedDate);
  const selectedEvents = upcomingEvents[selectedDateKey] || [];

  // Function to render the logo and event name on hover over event dates
  const renderTileContent = ({ date, view }) => {
    const dateKey = date.toDateString();
    const events = upcomingEvents[dateKey];

    if (view === "month" && events) {
      return (
        <div className="tile-logo">
          <img src={hopeimage} alt="Event Logo" className="event-logo-img" />
          <div className="event-tooltip">
            {events.map((event, idx) => (
              <div key={idx} className="event-tooltip-item">
                {event}
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  // Function to add a custom class to the dates with events
  const tileClassName = ({ date, view }) => {
    const dateKey = date.toDateString();
    if (upcomingEvents[dateKey]) {
      return "highlighted-date";
    }
    return null;
  };

  return (
    <div className="calendar-container">
      {/* Calendar Section at the top */}
      <div className="event-list-container">
        <h2 className="event-list-title">Events for {selectedDateKey}</h2>
        {selectedEvents.length > 0 ? (
          <ul className="event-list">
            {selectedEvents.map((event, index) => (
              <li key={index} className="event-item">
                <img
                  src={hopeimage}
                  alt="Event Logo"
                  className="event-logo-img"
                />
                {event}
              </li>
            ))}
          </ul>
        ) : (
          <p>No events for this day.</p>
        )}
      </div>
      {/* All upcoming events list (below calendar) */}
      <div className="all-events-container">
        <div className="events-list">
          {Object.keys(upcomingEvents).map((dateKey) => (
            <div key={dateKey} className="event-day">
              <h3 className="event-date">{dateKey}</h3>
              <ul className="event-list">
                {upcomingEvents[dateKey].map((event, index) => (
                  <li key={index} className="event-item">
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

      {/* Render the upcoming events list for the selected date */}
      
    </div>
  );
};

export default Upcomming;