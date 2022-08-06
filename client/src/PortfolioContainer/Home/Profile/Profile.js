import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a id="twitter-icon" href="https://twitter.com/Ebrahimtoru">
                <i className="fa fa-twitter" />
              </a>
              <a id="fb-icon" href="https://www.facebook.com/Ebrahimtoru">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-ibrahim-968a6275/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://github.com/ibrahimtoru">
                <i className="fa fa-github"></i>
              </a>
              <a href="mailto:ibrahimtoru@gmail.com">
                <i className="fa fa-envelope"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Ibrahim</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev 😎",
                    1000,
                    "Full stack 💻",
                    1000,
                    "Mern stack 📱",
                    1000,
                    "React.js 🌐",
                    1000,
                    "Next.js 🌐",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              The knack for building applications with front and back-end
              operations.
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Cntact Me{" "}
            </button>
            <a href="ibrahim-cv.pdf" download="my-cv.pdf">
              <button className="btn highlighted-btn">Get CV</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
