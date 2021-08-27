import React, { useState } from "react";
import { searchedHeroes, fetchHeroes } from "../../actions/fetch-heroes";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import "./HeroForm.css";
import { connect } from "react-redux";

const HeroForm = ({ heroes, ...props }) => {
  const [searchHero, setSearchHero] = useState("");

  const filterHeroes = (e) => {
    e.preventDefault();

    props.searchedHeroes(heroes, searchHero);
  };

  const reset = () => {
    fetchHeroes();
  };

  return (
    <form>
      <p>Search</p>
      <MyInput
        type="text"
        value={searchHero}
        onChange={(e) => setSearchHero(e.target.value)}
      />
      <MyButton type="submit" onClick={filterHeroes}>
        Find
      </MyButton>
      <MyButton type="submit" onClick={reset}>
        Reset
      </MyButton>
    </form>
  );
};

const mapStateToprops = (state) => ({
  heroes: state.fetchHeroesReducer.heroes,
});

export default connect(mapStateToprops, { searchedHeroes, fetchHeroes })(
  HeroForm
);
