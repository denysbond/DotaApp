import React from "react";
import StrenchHeroes from "../HeroesAttr/StrenchHeroes";
import AgiHeroes from "../HeroesAttr/AgiHeroes";
import IntHeroes from "../HeroesAttr/IntHeroes";
import classes from "./HeroesList.module.css";

const HeroList = ({ heroes }) => {
  const strHeroes = () => {
    const str = heroes.filter((hero) => {
      return hero.primary_attr === "str";
    });
    return str;
  };

  const agiHeroes = () => {
    const agi = heroes.filter((hero) => {
      return hero.primary_attr === "agi";
    });
    return agi;
  };

  const intHeroes = () => {
    const int = heroes.filter((hero) => {
      return hero.primary_attr === "int";
    });
    return int;
  };

  return (
    <div className={classes.heroesList}>
      <StrenchHeroes heroes={strHeroes} />
      <AgiHeroes heroes={agiHeroes} />
      <IntHeroes heroes={intHeroes} />
    </div>
  );
};

export default HeroList;
