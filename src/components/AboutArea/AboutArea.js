import "./AboutArea.css";
import bgImage from "../../assets/bg3.png";
import { Link } from "react-router-dom";

const AboutArea = () => {
  return (
    <section className="about-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12 col-sm-12 mb-4">
            <div className="wpo-about-img">
              <img src={bgImage} alt="about" loading="lazy" />
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12 ">
            <div className="wpo-about-text">
              <div className="wpo-about-title">
                <span>About Us</span>
                <h2>We Offer You Profesional Interior Design</h2>
                <h5>
                  Over 25 years Liarch helping investors building their drea &
                  business goals go to the perfection
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac
                  enim aliquam feugiat ullamcorper. Id risus mattis neque,
                  ullamcorper. Sed sit commodo vestibulum cras in cras. Nec
                  proin scelerisque quis nisl vitae, egestas non. Fringilla
                  auctor.
                </p>
                <div className="btns">
                  <Link className="theme-btn" to="/about">Discover More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutArea;
