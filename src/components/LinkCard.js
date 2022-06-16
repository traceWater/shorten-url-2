import React from "react";
import { useMediaQuery } from "react-responsive";
import Button from "./Button";
import "./LinkCard.css";

function LinkCard({ linkObj, copyFunc }) {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 800px" });

  return (
    <div className="link-card">
      <span className="link-original">{linkObj.original_link}</span>
      <hr />
      <span className="link-short">{linkObj.full_short_link}</span>
      <Button
        onClick={copyFunc}
        btnStyle="btn--regular"
        btnSize={isLargeScreen ? "btn--small" : "btn--long"}
        btnColour={linkObj.copied ? "violet" : "cyan"}
        text={linkObj.copied ? "Copied!" : "Copy"}
      />
    </div>
  );
}

export default LinkCard;
