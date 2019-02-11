import React, { useEffect, useState, useContext } from "react";
import Svg from "./Svgs";

const Input = ({ team, setTeam }) => {
  //   const runfunction = e => {
  //     dispatch({ type: "UPDATE_TEAM", payload: e.target.value });
  //   };

  return (
    <>
      <input
        className="team_input"
        type="text"
        placeholder="Enter a team"
        style={{ display: "block" }}
        onChange={e => setTeam(e.target.value)}
      />
    </>
  );
};

export default Input;
