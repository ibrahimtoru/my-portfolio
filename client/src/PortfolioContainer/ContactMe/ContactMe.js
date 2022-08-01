import Typical from "react-typical";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["Get In Touch 📧", 1000]} />
          </h2>{" "}
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
        <div className="back-form">
          <div className="img-back">
            <h4>Send Me an Email!</h4>
            <a className="email" href="mailto:ibrahimtoru@gmail.com">
              ibrahimtoru@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
