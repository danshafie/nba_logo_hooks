import React, { useState, useEffect, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import Svgs from "./Svgs";
import SvgComponent from "./SvgComponent";
import ExpandButton from "./expandButton";
import Input from "./Input";
import context from "./context";
import DownloadButton from "./DownloadButton";
const Main = () => {
  const [redColor, setRedColor] = useState(0);
  const [greenColor, setGreenColor] = useState(0);
  const [blueColor, setBlueColor] = useState(0);
  const [toggleExpand, setToggleExpand] = useState(false);
  const [team, setTeam] = useState(null);
  const [error, setError] = useState(false);

  // const { state, dispatch } = useContext(context);

  const setColor = e => {
    if (e.target.id === "red_slider") {
      setRedColor(Number(e.target.value));
    } else if (e.target.id === "green_slider") {
      setGreenColor(Number(e.target.value));
    } else if (e.target.id === "blue_slider") {
      setBlueColor(Number(e.target.value));
    }
  };

  const runFileChange = e => {
    const selectedFile = document.getElementById("input").files[0];
    const preview = document.querySelector(".svg.logo");

    if (selectedFile.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (function(aImg) {
        return function(e) {
          const svg = atob(
            e.target.result.replace(/data:image\/svg\+xml;base64,/, "")
          );
          setTeam(svg);
          preview.innerHTML = svg;
        };
      })();
      reader.readAsDataURL(selectedFile);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="container">
      {/* <div className="svgs">{Svgs.rockets}</div> */}

      <SvgComponent
        red={redColor}
        blue={blueColor}
        green={greenColor}
        toggleExpand={toggleExpand}
        team={team}
      />

      <input type="file" id="input" onChange={runFileChange} />

      <div className="controls">
        {/* <Input team={team} setTeam={setTeam} /> */}
        <ExpandButton
          toggleExpand={toggleExpand}
          setToggleExpand={setToggleExpand}
        />

        <div id="color_box">
          <input
            type="range"
            min="0"
            max="255"
            class="slider"
            id="red_slider"
            onChange={e => setColor(e)}
          />
          <p>
            Red: <span id="red_value">{redColor}</span>
          </p>

          <input
            type="range"
            min="0"
            max="255"
            class="slider"
            id="green_slider"
            onChange={e => setColor(e)}
          />
          <p>
            Green: <span id="green_value">{greenColor}</span>
          </p>

          <input
            type="range"
            min="0"
            max="255"
            class="slider"
            id="blue_slider"
            onChange={e => setColor(e)}
          />
          <p>
            Blue: <span id="blue_value">{blueColor}</span>
          </p>
        </div>

        <div
          className="colorhex"
          style={{
            width: "200px",
            height: "200px",
            background: `rgb(${redColor}, ${greenColor}, ${blueColor})`
          }}
        />
        {Boolean(team) && <DownloadButton team={team} />}

        {error && (
          <div className="error">
            there was an error reading your file. please try again
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
