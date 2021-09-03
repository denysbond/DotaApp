import React from "react";
import { connect } from "react-redux";
import Hero from "../Hero/Hero";
import NotFound from "../NotFound/NotFound";
import classes from "./SearchList.module.css";

const SearchList = (props) => {
  if (props.newHero.length) {
    return (
      <div className={classes.searchList}>
        <h1 className={classes.found}>Found Heroes</h1>
        <div className={classes.searchHero}>
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
      </div>
    );
  } else if (props.newHero.length === 0) {
    return <NotFound />;
  }
};

const mapStateToprops = (state) => ({
  newHero: state.fetchHeroesReducer.newHero,
});

export default connect(mapStateToprops)(SearchList);
