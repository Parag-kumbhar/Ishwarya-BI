import React from "react";
import "./ItProgram.css"; // CSS file for styling

const ItProgram = () => {
  return (
    <div className="it-program">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Our IT Program</h1>
        <p>
          Empowering you with cutting-edge technology skills to excel in your
          career.
        </p>
      </section>

      {/* Program Highlights Section */}
      <section className="highlights">
        <h2>Program Highlights</h2>
        <ul>
          <li>Comprehensive courses on Web Development, AI, and Data Science</li>
          <li>Expert instructors with real-world experience</li>
          <li>Hands-on projects and capstone assignments</li>
          <li>Certification upon program completion</li>
        </ul>
      </section>

      {/* Courses Offered */}
      <section className="courses">
        <h2>Courses Offered</h2>
        <div className="course-list">
          <div className="course-item">
            <h3>Web Development</h3>
            <p>
              Learn HTML, CSS, JavaScript, and modern frameworks like React and
              Angular.
            </p>
          </div>
          <div className="course-item">
            <h3>Artificial Intelligence</h3>
            <p>
              Dive into machine learning, neural networks, and AI model
              development.
            </p>
          </div>
          <div className="course-item">
            <h3>Data Science</h3>
            <p>
              Master data analysis, visualization, and big data technologies
              like Python and R.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <h2>Why Choose Our Program?</h2>
        <p>
          Our IT program is designed to equip you with industry-relevant skills
          that are in high demand.
        </p>
        <ul>
          <li>Flexible learning schedules</li>
          <li>Access to industry experts</li>
          <li>Job placement assistance</li>
          <li>Networking opportunities with professionals</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Enroll Now</h2>
        <p>
          Take the first step towards a successful IT career! Contact us at{" "}
          <a href="mailto:admissions@itprogram.com">admissions@itprogram.com</a>{" "}
          or call us at (123) 456-7890.
        </p>
      </section>
    </div>
  );
};

export default ItProgram;
