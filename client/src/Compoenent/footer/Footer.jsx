import React from "react";
import "./PromoSection.css";
import img from "../../images/footimg.jpg"
const PromoSection = () => {
  return (
    <div className="promo-section">
      <div className="promo-content">
        <h1>
          Get Started <span className="highlight">Today</span>
        </h1>
        <h2>Free Trial Class Available</h2>
        <p>
          Take the first step towards equipping your child with the tools to
          face life's challenges. Register for a free trial class and see the
          transformation for yourself!
        </p>
        <button className="promo-button">Browse Our Classes</button>
      </div>
      <div className="promo-image">
        <img
          src={img}
          alt="Karate Class"
        />
      </div>
    </div>
  );
};

export default PromoSection;
