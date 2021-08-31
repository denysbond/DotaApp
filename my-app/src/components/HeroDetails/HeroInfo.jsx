import React from "react";
import classes from "./HeroDetails.module.css";
import HeroStats from "./HeroStats";

const HeroInfo = ({ hero }) => {
  let url = "https://api.opendota.com";
  let src = `${url}${hero.img}`;
  console.log(hero);
  return (
    <div>
      <div className={classes.heroContent}>
        <img src={src} alt="icon" />
        <ul className={classes.heroInfo}>
          <li>Name: {hero.localized_name}</li>
          <li>Attack Type: {hero.attack_type}</li>
          <li>Rolles: {hero.roles.join(", ")}</li>
        </ul>
      </div>
      <HeroStats hero={hero} />
    </div>
  );
};

export default HeroInfo;
