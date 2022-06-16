import React, { useState } from "react";
import "./Nav.css";
import { useMediaQuery } from "react-responsive";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as LogoIcon } from "../../images/logo.svg";
import Button from "./Button";

function Nav() {
  const [menuClick, setmenuClick] = useState(false);

  const handleMenuClick = () => {
    setmenuClick(!menuClick);
  };

  const isSmallScreen = useMediaQuery({ query: "(max-width: 799px)" });
  const isLargeScreen = useMediaQuery({ query: "(min-width: 800px" });

  const navName = isSmallScreen ? "menu-nav-mobile" : "menu-nav";
  return (
    <>
      <nav className="nav-bar">
    
        <a href="./" className="nav-logo">
          <LogoIcon fill="#34313D" />
        </a>

        {isSmallScreen && (
          <div className="menu-icon" onClick={handleMenuClick}>
            <FontAwesomeIcon icon={faBars} size="2x" />
          </div>
        )}

        {((isSmallScreen && menuClick) || isLargeScreen) && (
          <div className={navName}>
            <ul>
              <div className="nav-item-box">
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#resources">Resources</a>
                </li>
              </div>
              <hr></hr>
              <div className="account-box">
                <li>
                  <a href="#login">Login</a>
                </li>
                <li>
                  <Button
                    btnStyle="btn--round"
                    btnSize={isSmallScreen ? "btn--mobile" : "btn--nav"}
                    btnColour="cyan"
                    text="Sign Up"
                  />
                </li>
              </div>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Nav;
