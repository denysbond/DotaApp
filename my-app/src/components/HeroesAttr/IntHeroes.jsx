import React from "react";
import Hero from "../Hero/Hero";
import "./HeroesAttr.css";

const IntHeroes = ({ heroes }) => {
  const heroesList = heroes();
  return (
    <div className="heroes_container">
      <h1 className="heroes_class">INTELLIGENCE</h1>
      <div className="heroes_attr">
        {heroesList.map((hero, index) => {
          return (
            <Hero hero={hero} index={index} key={hero.id} heroes={heroesList} />
          );
        })}
      </div>
    </div>
  );
};

export default IntHeroes;
