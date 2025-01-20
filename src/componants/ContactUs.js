import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function ContactUs() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Contact Us</h1>
      <div className="row">
        {/* Form Column */}
        <div className="col-md-7">
          <form className="mb-4"> {/* Keep this for bottom margin of the form */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="Your message"
              ></textarea>
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => alert("Form submitted successfully!")}
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information Column */}
        <div className="col-md-5 mt-4"> {/* Keep mt-4 for top margin */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> <strong>Ishwarya Institute of Management and Technology</strong>
            </p>
            <p>E-5 Vardhman Nagar, 7th Lane, Rajarampuri,</p>
            <p>Kolhapur – 416008, Maharashtra, India</p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> Email: <a href="mailto:info@ishwaryainstitute.in">info@ishwaryainstitute.in</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> Contact no: +91-231-2522726
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
