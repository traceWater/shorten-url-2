import React, { useState, useEffect, useRef } from "react";
import LinkCard from "./LinkCard";
import "./Shortener.css";

function Shortener() {
  const sessionKey = "shortenLinks";
  const [urlInput, setUrlInput] = useState("");


  const [linkList, setLinkList] = useState(
    JSON.parse(sessionStorage.getItem(sessionKey)) || []
  );
  const [err, setError] = useState("");
  const [, setCurrCopyIndex] = useState(null);
  const linkRef = useRef(null);
  const urlInputRef = useRef(null);

  const handleChange = (e) => {
    const { value } = e.target;
    setUrlInput(value);
  };

  const handleShorten = async (e) => {
    e.preventDefault();

    if (urlInput.trim() === "") {
      setError("Please add a link");
      urlInputRef.current.setCustomValidity("Empty input");
      setUrlInput("");
      return;
    }
    urlInputRef.current.setCustomValidity("");

    if (isURL(urlInput)) {
      const url = `https://api.shrtco.de/v2/shorten?url=${urlInput}`;

      try {
        let response = await fetch(url);
        if (!response.ok) {
          console.log(`Error status: ${response.status}`);
        } else {
          let res = await response.json();
          setLinkList((prevList) => {
            return [...prevList, res.result];
          });
          setError("");
          // scroll into view of the new link
          linkRef.current.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
          });
        }
      } catch (err) {
        console.error(err);
      }
    }
    setUrlInput("");
  };

  const isURL = (str) => {
    var pattern = new RegExp("(([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}");
    return pattern.test(str);
  };

  const copyToClipboard = async (e, index, linkObj) => {
    try {
      await navigator.clipboard.writeText(linkObj.full_short_link);
      linkObj["copied"] = true;
      setCurrCopyIndex((prevIndex) => {
        if (prevIndex !== null && prevIndex !== index) {
          // init copy button
          linkList[prevIndex]["copied"] = false;
        }
        return index;
      });
    } catch (err) {
      console.log(err);
      linkObj["copied"] = false;
    }
  };

  const shortenLinks = linkList.map((linkObj, index) => {
    return (
      <LinkCard
        key={linkObj.code}
        linkObj={linkObj}
        copyFunc={(e) => copyToClipboard(e, index, linkObj)}
      />
    );
  });


  useEffect(() => {
    sessionStorage.setItem(sessionKey, JSON.stringify(linkList));
  }, [linkList]);

  return (
    <>
      <form
        noValidate
        className="shorten-form"
        id="shorten-form"
        onSubmit={handleShorten}
      >
        <div className="input-box">
          <input
            type="text"
            name="url"
            value={urlInput}
            onChange={handleChange}
            ref={urlInputRef}
            placeholder="Shorten a link here..."
          />
          <p className="error-msg">{err}</p>
        </div>
        <div id="search-btn">
          <input type="submit" value="Shorten It!" />
        </div>
      </form>
      {shortenLinks}
      <div className="scrollTo" ref={linkRef}></div>
    </>
  );
}

export default Shortener;
