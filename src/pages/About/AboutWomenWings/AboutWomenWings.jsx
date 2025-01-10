import React from "react";
import "./aboutwomenwings.css";

const AboutWomenWings = () => {
  return (
    <section className="about-women-wings">
      <div className="container">
        <header className="header">
          <h2>Empowering Women Everywhere</h2>
          <p>
            Women Wings is a platform dedicated to fostering growth,
            independence, and empowerment for women worldwide. Through our
            initiatives, we aim to create lasting change.
          </p>
        </header>
        <div className="content">
          <div className="card">
            <h3>Leadership Programs</h3>
            <p>
              Building strong leaders through tailored workshops, mentorship
              programs, and hands-on experiences.
            </p>
            <button className="btn">Learn More</button>
          </div>
          <div className="card">
            <h3>Skill Development</h3>
            <p>
              Empowering women with the skills they need to succeed in today’s
              competitive world.
            </p>
            <button className="btn">Learn More</button>
          </div>
          <div className="card">
            <h3>Community Support</h3>
            <p>
              Connecting women with resources, support networks, and a sense of
              belonging.
            </p>
            <button className="btn">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWomenWings;
