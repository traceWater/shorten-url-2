import React from "react";
import { ReactComponent as InfoImage } from "../../images/illustration-working.svg";
import Button from "./Button";
import Shortener from "./Shortener";
import Footer from "./Footer";
import "./Content.css";

function Content() {
  return (
    <>
      <div className="top-box">
        <div className="image">
          <InfoImage
            className="svg-working"
            width="370"
            height="350"
            viewBox="0 0 520 500"
          />
        </div>

        <div className="info-box">
          <h3>More than just shorter links</h3>

          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>

          <Button
            btnStyle="btn--round"
            btnSize="btn--medium"
            btnColour="cyan"
            text="Get Started"
          />
        </div>
      </div>

      <Shortener />

      <div className="stat-box">
        <h3>Advanced Statistics</h3>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>

        <div className="stat-container">
          <div className="stat-1">
            <div className="stat-icons"></div>
            <h4>Brand Recognition</h4>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>

          <div className="separator"></div>

          <div className="stat-2">
            <div className="stat-icons"></div>
            <h4>Detailed Records</h4>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>

          <div className="separator"></div>

          <div className="stat-3">
            <div className="stat-icons"></div>
            <h4>Fully Customizable</h4>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>

      <div className="boost-box">
        <h4>Boost your links today</h4>
        <Button
          btnStyle="btn--round"
          btnSize="btn--medium"
          btnColour="cyan"
          text="Get Started"
        />
      </div>

      <Footer />
    </>
  );
}

export default Content;
