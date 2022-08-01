import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      " Dedicated full stack developer, who loves to design and build web apps.Strong creative and analytical skills.Team player with an eye for detail. Strong professional with a degree in IT, willing to be an asset to an organization.",

    highlights: {
      bullets: [
        "Full Stack web development",
        "ReactJs",
        "Next Js",
        "Nodejs",
        "Redux for State Mnanagement",
        "Building REST API",
        "Managing database, SQL and NoSQL",
      ],
      heading: "Here is my skill list:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight " key={i}>
        <div className="highlight-blob "></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in "
      id={props.id || ""}
    >
      <div className="about-me-parent ">
        <ScreenHeading
          title={"About Me"}
          subHeading={"My Portfolio Overview"}
        />
        <div className="about-me-card ">
          <div className="about-me-profile "></div>
          <div className="about-me-details ">
            <span className="about-me-description ">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights ">
              <div className="highlight-heading ">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options ">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Contact Me{" "}
              </button>
              <a href="my-cv.pdf" download="my-cv.pdf">
                <button className="btn highlighted-btn ">Get CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
