import React from "react";
import Hero from "../Hero/Hero";
import "./HeroesAttr.css";

const AgiHeroes = ({ heroes }) => {
  const heroesList = heroes();
  return (
    <div className="heroes_container">
      <h1 className="heroes_class">AGILITY</h1>
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

export default AgiHeroes;
