import React, { useState } from "react";

const ExpandButton = ({ toggleExpand, setToggleExpand }) => {
  return (
    <button
      className="expand_button"
      onClick={() => setToggleExpand(!toggleExpand)}
    >
      {toggleExpand ? "Reduce" : "Enlarge"}
    </button>
  );
};

export default ExpandButton;
