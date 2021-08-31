import React from "react";
import logo from "../../img/Dota2-01.png";
import "../../styles/App.css";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />{" "}
      <h1 style={{ fontWeight: "100" }}>Heroes of Dota 2</h1>
    </div>
  );
};

export default Logo;
