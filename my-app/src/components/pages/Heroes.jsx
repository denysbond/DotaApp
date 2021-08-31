import React from "react";
import { connect } from "react-redux";
import { fetchHeroes } from "../../actions/fetch-heroes";
import { useEffect } from "react";
import HeroList from "../HeroList/HeroList";
import Loader from "../UI/loader/Loader";
import SearchList from "../SearchList/SearchList";

import HeroForm from "../form/HeroForm";
import "../../styles/App.css";
import NotFound from "../NotFound/NotFound";

const Heroes = (props) => {
  useEffect(() => {
    props.fetchHeroes();
  }, []);

  const heroes = props.heroesData;
  console.log(props.newHero.length);

  return (
    <div className="App">
      <HeroForm />
      <div>
        {props.newHero.length ? (
          <SearchList newHero={props.newHero} />
        ) : (
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
              <HeroList heroes={heroes} />
            )}
          </div>
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
