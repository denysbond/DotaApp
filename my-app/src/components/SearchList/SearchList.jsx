import React from "react";
import Hero from "../Hero/Hero";
import classes from "./SearchList.module.css";
import NotFound from "../NotFound/NotFound";

const SearchList = (props) => {
  return (
    <div className={classes.searchList}>
      {props.newHero.length ? (
        <div className={classes.searchHero}>
          <h1 className={classes.found}>Found Heroes</h1>
          {props.newHero.map((hero, index) => {
            return (
              <Hero
                key={hero.id}
                hero={hero}
                index={index}
                heroes={props.newHero}
              />
            );
          })}
        </div>
      ) : (
        <h1>Not Found</h1>
      )}
    </div>
  );
};

export default SearchList;
