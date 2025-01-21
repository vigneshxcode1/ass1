import React from 'react'
import '../Navbar/About.css';
import img1 from "../../images/1.png";
import img2 from "../../images/2.png"
const Banner = () => {
  return (
   <>
        <section className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>
            Learn the Way of the Warrior
            <span> Shape Your Body and Mind</span>
          </h2>
          <p>
            Welcome to the Okinawan Shorinryu Karate Association of India. We
            are dedicated to preserving and teaching the traditional art of
            Matsubayashi Shorin Ryu Karate, as founded by O'Sensei Shoshin
            Nagamine. Under the guidance of Shihan M. Ravi, a 6th Dan Black
            Belt with over 30 years of experience, our dojo focuses on
            developing concentration, discipline, and physical strength through
            rigorous training.
          </p>
          <p>
            Join us to not only master the physical techniques of karate but
            also cultivate the mindset and discipline essential for lifelong
            growth and self-improvement.
          </p>
        </div>
        <div className="about-images">
          <img
            src={img1}
            alt="Karate Master"
            className="about-image"
          />
          <img
            src={img2}
            alt="Karate Training"
            className="about-image"
          />
        </div>
      </div>
    </section>
  
   </>
  )
}

export default Banner