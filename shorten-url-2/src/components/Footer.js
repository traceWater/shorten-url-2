import React from "react";
import { ReactComponent as FbIcon } from "../../images/icon-facebook.svg";
import { ReactComponent as InstaIcon } from "../../images/icon-instagram.svg";
import { ReactComponent as LogoIcon } from "../../images/logo.svg";
import { ReactComponent as PinIcon } from "../../images/icon-pinterest.svg";
import { ReactComponent as TwIcon } from "../../images/icon-twitter.svg";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <a href="./" className="nav-logo">
        <LogoIcon fill="white" />
      </a>

      <div className="footer-links">
        <div>
          <h5>Features</h5>
          <a href="#shorten-form">Link Shortening</a>
          <a href="#Features">Branded Links</a>
          <a href="#Features">Analytics</a>
        </div>

        <div>
          <h5>Resources</h5>
          <a href="#Resources">Blog</a>
          <a href="#Resources">Developers</a>
          <a href="#Resources">Support</a>
        </div>

        <div>
          <h5>Company</h5>
          <a href="#Company">About</a>
          <a href="#Company">Our Team</a>
          <a href="#Company">Careers</a>
          <a href="#Company">Contact</a>
        </div>
      </div>

      <div className="icon-footer">
        <FbIcon />
        <TwIcon />
        <PinIcon />
        <InstaIcon />
      </div>
    </div>
  );
}

export default Footer;
