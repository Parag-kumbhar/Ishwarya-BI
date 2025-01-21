import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVolleyball,
  faLightbulb,
  faBook,
} from "@fortawesome/free-solid-svg-icons"; // Example icon

export default function Home() {
  return (
    <div className="overflow-hidden ">
      <div>
        <img
          src="https://www.ishwaryainstitute.in/wp-content/uploads/2024/03/pexels-tima-miroshnichenko-5686052-scaled.jpg"
          className="img-fluid"
          alt="Office"
        />

        <div>
          <h1 className="text-overlay custom-underline fw-bold">
            Well Equipped Classes
            <br />
            Great Community Students
          </h1>
        </div>
        <div className="text-center position-absolute top-100 start-50 translate-middle">
          <button
            type="button"
            style={{
              background: "purple",
              border: "none",
              marginTop: "-150px",
            }}
            className="btn btn-primary btn-lg slide-up" // Add the slide-up class
          >
            Join us Now
          </button>
        </div>
      </div>
      <br />
      <div className="row text-center">
        <h1
          className="custom-heading"
          style={{
            color: "purple",
            textUnderlineOffset: "6px",
            textDecorationThickness: "3px",
            textDecoration: "underline",
            display: "inline-block",
            textDecorationColor: "orange",
          }}
        >
          Unlimited Possibilities
        </h1>
      </div>
      {/* Add cards below */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4 col-sm-6 mb-4">
            <div className="card h-100">
              {" "}
              {/* Ensure card is full height */}
              <div className="card-body d-flex flex-column">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: "30%" }}
                >
                  <FontAwesomeIcon
                    icon={faBook}
                    size="3x"
                    style={{ color: "purple" }}
                  />
                </div>
                <h5 className="card-title">Online Courses</h5>
                <p className="card-text">
                  Choose from hundreds of free training courses or pay to get
                  certified to complete a course or specialization.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: "30%" }}
                >
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    size="3x"
                    style={{ color: "purple" }}
                  />
                </div>
                <h5 className="card-title">Our Mission</h5>
                <p className="card-text">
                  Developing strong vision and mission statements can help
                  stakeholders reach a common understanding.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: "30%" }}
                >
                  <FontAwesomeIcon
                    icon={faVolleyball}
                    size="3x"
                    style={{ color: "purple" }}
                  />
                </div>
                <h5 className="card-title">Professional Certificate</h5>
                <p className="card-text">
                  Join the millions of students around the world who are already
                  learning. Find an experienced and suitable instructor just for
                  you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
