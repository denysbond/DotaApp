import React from "react";
import classes from "./HeroDetails.module.css";

const HeroStats = ({ hero }) => {
  return (
    <div className={classes.heroStats}>
      <div className={classes.stats}>
        <h2>Stats</h2>
        <ul style={{ marginLeft: "5px" }}>
          <li>Base health:</li>
          <li>Base health regen:</li>
          <li>Base mana regen:</li>
          <li>Base attack:</li>
          <li>Base str:</li>
          <li>Base int:</li>
          <li>Base agi:</li>
          <li>Move speed:</li>
        </ul>
      </div>
      <div className={classes.values}>
        <h2>Values</h2>
        <ul>
          <li>{hero.base_health}</li>
          <li>{hero.base_health_regen}</li>
          <li>{hero.base_mana_regen}</li>
          <li>{hero.base_attack_max}</li>
          <li>{hero.base_str}</li>
          <li>{hero.base_int}</li>
          <li>{hero.base_agi}</li>
          <li>{hero.move_speed}</li>
        </ul>
      </div>
    </div>
  );
};

export default HeroStats;
