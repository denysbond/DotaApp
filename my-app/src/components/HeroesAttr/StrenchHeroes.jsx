import React from "react";
import Hero from "../Hero/Hero";
import "./HeroesAttr.css";

const StrenchHeroes = ({ heroes }) => {
  const heroesList = heroes();

  return (
    <div className="heroes_container">
      <h1 className="heroes_class">STRENCH</h1>
      <div className="heroes_attr">
        {heroesList.map((hero, index) => {
          return (
            <Hero hero={hero} key={hero.id} index={index} heroes={heroesList} />
          );
        })}
      </div>
    </div>
  );
};

export default StrenchHeroes;
