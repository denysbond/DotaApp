import React from "react";
import Hero from "../Hero/Hero";

const IntHeroes = ({ heroes }) => {
  const heroesList = heroes();
  return (
    <div>
      {heroesList.map((hero, index) => {
        return (
          <Hero hero={hero} index={index} key={hero.id} heroes={heroesList} />
        );
      })}
    </div>
  );
};

export default IntHeroes;
