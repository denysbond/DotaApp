import React from "react";
import Hero from "../Hero/Hero";

const StrenchHeroes = ({ heroes }) => {
  const heroesList = heroes();

  return (
    <div>
      {heroesList.map((hero, index) => {
        return (
          <Hero hero={hero} key={hero.id} index={index} heroes={heroesList} />
        );
      })}
    </div>
  );
};

export default StrenchHeroes;
