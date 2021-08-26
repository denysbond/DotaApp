import React from "react";
import classes from "./Hero.module.css";

const Hero = ({ hero, index, heroes }) => {
  let url = "https://api.opendota.com";
  let src = `${url}${heroes[index].img}`;

  return (
    <div className={classes.hero}>
      <img src={src} alt="logo" />
      <span className={classes.content}>{hero.localized_name}</span>
    </div>
  );
};

export default Hero;
