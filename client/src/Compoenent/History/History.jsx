import React from "react";
import "./OurHistory.css";
import img1 from "../../images/k1.jpg"
import img2 from "../../images/k2.png"
import img3 from "../../images/k3.png"
const OurHistory = () => {
  return (
    <section className="history-section">
      <div className="history-header">
        <h2>Our History</h2>
        <p>
          The Okinawan Shorinryu Karate Association of India was founded with
          the mission of preserving the legacy of Matsubayashi Shorin Ryu
          Karate as taught by O'Sensei Shoshin Nagamine. Under the leadership of
          Shihan M. Ravi, a 6th Dan Black Belt with over three decades of
          experience, the dojo has become a hub for traditional karate training
          in India.
        </p>
        <p>
          With a focus on discipline, respect, and mastery, our dojo has guided
          countless students in their martial arts journey, ensuring that the
          rich heritage of Okinawan karate thrives for generations to come.
        </p>
        <a href="#founders" className="cta-link">
          Learn More About How Our Founders Paved The Way
        </a>
      </div>

      <div className="founders-section" id="founders">
        <div className="founder-card">
          <img src={img1} alt="Shihan M. Ravi" />
          <h3>Shihan M. Ravi</h3>
          <p>Association Head</p>
        </div>
        <div className="founder-card">
          <img src={img2} alt="Shoshin Nagamine" />
          <h3>Shoshin Nagamine</h3>
          <p>Creator - O'Sensei</p>
        </div>
        <div className="founder-card">
          <img src={img3} alt="Lara Chamberlain" />
          <h3>Lara Chamberlain</h3>
          <p>Founder</p>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;
