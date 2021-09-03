import React from "react";
import { connect } from "react-redux";
import { fetchHeroes } from "../../actions/fetch-heroes";
import { useEffect } from "react";
import HeroList from "../HeroList/HeroList";
import Loader from "../UI/loader/Loader";
import { useHistory } from "react-router";
import "../../styles/App.css";

const Heroes = (props) => {
  const history = useHistory();
  useEffect(() => {
    props.fetchHeroes();
  }, []);

  const heroes = props.heroesData;

  return (
    <div className="App">
      <div>
        {props.isLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "150px",
            }}
          >
            <Loader />
          </div>
        ) : (
          <HeroList heroes={heroes} newHeroesLength={props.newHero.length} />
        )}
      </div>
    </div>
  );
};

const mapStateToprops = (state) => ({
  heroesData: state.fetchHeroesReducer.heroes,
  isLoading: state.fetchHeroesReducer.loading,
  newHero: state.fetchHeroesReducer.newHero,
});

export default connect(mapStateToprops, { fetchHeroes })(Heroes);
