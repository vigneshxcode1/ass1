import React from "react";
import "./TestimonialCarousel.css";
import img from "../../images/profile.jpg"
const testimonials = [
  {
    image: img,
    text: `My son was always full of energy. Almost too much! Keeping him focused was a challenge, and he needed something that taught him discipline in a positive way. Since joining the dojo, he’s transformed. He’s not only more focused in school, but he’s also respectful and more considerate of others. Karate has given him an outlet for his energy and a purpose to strive toward. Watching him practice with dedication is a joy, and I’m grateful for the sense of responsibility and respect this dojo has instilled in him. It’s been a blessing for our family.`,
    name: "Anjali",
    role: "Proud Mother",
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="testimonial-section">
      <h2 className="testimonial-heading">
        Throughout Our Journey, We Have Helped Countless People{" "}
        <span className="highlight">Transform Their Lives</span>
      </h2>
      <p className="testimonial-subheading">
        Here are some kind words from a few of them
      </p>
      <div className="testimonial-card">
        <div className="testimonial-image-wrapper">
          <img
            src={testimonials[0].image}
            alt={testimonials[0].name}
            className="testimonial-image"
          />
        </div>
        <div className="testimonial-content">
          <p className="testimonial-quote">“{testimonials[0].text}”</p>
          <p className="testimonial-author">
            — {testimonials[0].name}, {testimonials[0].role}
          </p>
        </div>
      </div>
      <div className="testimonial-navigation">
        <button className="nav-button">❮</button>
        <button className="nav-button1">❯</button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
