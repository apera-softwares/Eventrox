import React from "react";
import AboutV1Data from "../../jsonData/about/AboutV1Data.json";
import { HashLink as Link } from "react-router-hash-link";
import ReactWOW from "react-wow";

const AboutV1 = () => {
  return (
    <>
      <section id="about" className="about-section">
        <div className="anim-icons full-width">
          <span className="icon icon-circle-blue"></span>
          <ReactWOW animation="fadeInLeft">
            <span className="icon icon-dots"></span>
          </ReactWOW>
          <ReactWOW animation="zoomIn">
            <span className="icon icon-circle-1"></span>
          </ReactWOW>
        </div>
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="title">ABOUT EVENT</span>
                  <h2>Future of Work HR Conference</h2>
                  <div className="text">
                    Discover bold ideas, real-world tools, and inspiring voices
                    shaping the future of work. From leadership and HR tech to
                    skills, DEI, and workplace culture—this is where HR leaders
                    come to learn, connect, and take action.
                  </div>
                </div>
                <ul className="list-style-one">
                  {AboutV1Data.map((aboutData) => (
                    <li key={aboutData.id}>{aboutData.listData}</li>
                  ))}
                </ul>
                <div className="btn-box">
                  <Link
                    to={`#form-section`}
                    className="theme-btn btn-style-three"
                  >
                    <span className="btn-title">Register Now</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="image-box">
                <ReactWOW animation="fadeIn">
                  <figure className="image">
                    <img src="../images/resource/about-img-1.jpg" alt="image" />
                  </figure>
                </ReactWOW>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutV1;
