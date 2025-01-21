import React from "react";
import "./AboutUs.css"; // CSS file for styling (optional)

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="hero">
        <h1>About Us</h1>
        <p>
          Welcome to Ishwarya Institute of Management and Technology ! We're
          dedicated to providing the best services and products to our
          customers.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to deliver exceptional value to our clients through
          innovative solutions and unmatched customer service.
        </p>
      </section>

      {/* Team Section */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img
              src="https://via.placeholder.com/150"
              alt="John Doe"
              className="team-photo"
            />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img
              src="https://via.placeholder.com/150"
              alt="Jane Smith"
              className="team-photo"
            />
            <h3>Jane Smith</h3>
            <p>Chief Technology Officer</p>
          </div>
          <div className="team-member">
            <img
              src="https://via.placeholder.com/150"
              alt="Emily Johnson"
              className="team-photo"
            />
            <h3>Emily Johnson</h3>
            <p>Marketing Manager</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Us</h2>
        <p>
          Have questions? Reach out to us at{" "}
          <a href="mailto:contact@yourcompany.com">contact@yourcompany.com</a>{" "}
          or call us at (123) 456-7890.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
