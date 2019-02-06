import React, { useEffect, useState } from "react";
import Svg from "./Svgs";

const SvgComponent = ({
  title,
  handleLogoClick,
  red,
  green,
  blue,
  toggleExpand
}) => {
  const [element, setElement] = useState(null);
  const [paths, setPaths] = useState([]);
  const [svgEle, setSvgele] = useState(null);

  useEffect(() => {
    const svgEle = document.querySelector("svg");
    setSvgele(svgEle);
    getPaths();

    if (element) {
      element.style.fill = `rgb(${red}, ${green}, ${blue})`;
    }

    if (toggleExpand) {
      svgEle.classList.add("expanded");
    }
    if (!toggleExpand) {
      svgEle.classList.remove("expanded");
    }
  }, [element, red, green, blue, toggleExpand]);

  const getPaths = () => {
    const paths = Array.from(document.querySelectorAll("path"));
    setPaths(paths);
    paths.forEach(path => path.addEventListener("click", handlePathClick));
  };

  const handlePathClick = e => {
    setElement(e.target);
    // e.target.style.fill = `rgb(${red}, ${green}, ${blue})`;
  };

  return <div className="svg logo">{Svg[title]}</div>;
};

export default SvgComponent;
