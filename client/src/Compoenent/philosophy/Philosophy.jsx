import React from "react";
import "./philsophy.css";
import img1 from "../../images/karate1.jpg";
import img2 from "../../images/karate2.jpg";
import img3 from "../../images/karate3.jpg";

const Philosophy = () => {
  return (
    <>
      <section className="philosohy-section">
        <div className="philosohy-header">
          <h2>Our Philosophy</h2>
          <p>
            At the Okinawan Shorinryu Karate Association of India, we follow the
            path of karate-do, a journey where body, mind, and spirit become
            one. Guided by O’Sensei Shoshin Nagamine’s teachings, our practice
            embraces three pillars
          </p>
        
        </div>

        <div className="philosohy-section" id="philosohy">
          <div className="philosohy-card">
            <img src={img1} alt="Shihan M. Ravi" />
            <h3>Reigi Saho</h3>
            <p>Respect and Humility </p>
            <h3>
              {" "}
              Honoring tradition and building character through discipline.
            </h3>
          </div>
          <div className="philosohy-card">
            <img src={img2} alt="Shoshin Nagamine" />
            <h3>Shin Gi Tai</h3>
            <p>Harmony of Body and Mind</p>
            <h3>
              Focusing on balance, strength, and mental clarity through kata and
              mindful breathing
            </h3>
          </div>
          <div className="philosohy-card">
            <img src={img3} alt="Lara Chamberlain" />
            <h3>Kaizenl</h3>
            <p>Perseverance and Growth</p>
            <h3>
              Constantly striving for improvement, both in the dojo and in life.
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Philosophy;
