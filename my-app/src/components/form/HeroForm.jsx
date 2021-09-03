import React, { useState } from "react";
import { searchedHeroes, fetchHeroes } from "../../actions/fetch-heroes";
import { useHistory } from "react-router";
import MyInput from "../UI/input/MyInput";
import "./HeroForm.css";
import { connect } from "react-redux";

const HeroForm = ({ heroes, ...props }) => {
  const [searchHero, setSearchHero] = useState("");
  const history = useHistory();

  const filterHeroes = (e) => {
    e.preventDefault();
    props.searchedHeroes(heroes, searchHero);

    history.push("/searchlist");
  };

  const reset = () => {
    props.fetchHeroes();
    history.push("/");
  };

  return (
    <div className="heroForm">
      <form>
        <p>Search</p>
        <MyInput
          type="text"
          value={searchHero}
          onChange={(e) => setSearchHero(e.target.value)}
        />
        <button
          className="myBtn"
          onClick={filterHeroes}
          disabled={!searchHero && true}
        >
          Find
        </button>
        <button className="myBtn" onClick={reset}>
          Reset
        </button>
      </form>
    </div>
  );
};

const mapStateToprops = (state) => ({
  heroes: state.fetchHeroesReducer.heroes,
});

export default connect(mapStateToprops, { searchedHeroes, fetchHeroes })(
  HeroForm
);
