import React, { useEffect, useState } from "react";
import Svg from "./Svgs";

const SvgComponent = ({ title, handleLogoClick, red, green, blue }) => {
  const [element, setElement] = useState(null);

  useEffect(() => {
    const paths = document.querySelectorAll("path");

    paths.forEach(path => path.addEventListener("click", handlePathClick));

    if (element) {
      element.style.fill = `rgb(${red}, ${green}, ${blue})`;
    }
  });

  const handlePathClick = e => {
    setElement(e.target);
  };

  return <div className="svg test">{Svg[title]}</div>;
};

export default SvgComponent;
