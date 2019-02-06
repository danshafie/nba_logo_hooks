import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Svgs from "./Svgs";
import SvgComponent from "./SvgComponent";
import ExpandButton from "./expandButton";

const App = () => {
  const [redColor, setRedColor] = useState(0);
  const [greenColor, setGreenColor] = useState(0);
  const [blueColor, setBlueColor] = useState(0);
  const [toggleExpand, setToggleExpand] = useState(false);

  const setColor = e => {
    if (e.target.id === "red_slider") {
      setRedColor(Number(e.target.value));
    } else if (e.target.id === "green_slider") {
      setGreenColor(Number(e.target.value));
    } else if (e.target.id === "blue_slider") {
      setBlueColor(Number(e.target.value));
    }
  };

  return (
    <div className="container">
      {/* <div className="svgs">{Svgs.rockets}</div> */}

      <SvgComponent
        title="lakers"
        red={redColor}
        blue={blueColor}
        green={greenColor}
        toggleExpand={toggleExpand}
      />

      <div className="controls">
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
      </div>
    </div>
  );
};

export default App;
