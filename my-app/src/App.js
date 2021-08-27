import React from "react";
import HeroForm from "./components/form/HeroForm";
import "./styles/App.css";
import logo from "./img/Dota2-01.png";
import { connect } from "react-redux";
import { fetchHeroes } from "./actions/fetch-heroes";
import { useEffect } from "react";
import HeroList from "./components/HeroList/HeroList";
import Loader from "./components/UI/loader/Loader";
import SearchList from "./components/SearchList/SearchList";

function App(props) {
  useEffect(() => {
    props.fetchHeroes();
  }, []);

  const heroes = props.heroesData;

  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="logo" />{" "}
        <h1 style={{ fontWeight: "100" }}>Heroes of Dota 2</h1>
      </div>
      <HeroForm />
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
  );
}

const mapStateToprops = (state) => ({
  heroesData: state.fetchHeroesReducer.heroes,
  isLoading: state.fetchHeroesReducer.loading,
  newHero: state.fetchHeroesReducer.newHero,
});

export default connect(mapStateToprops, { fetchHeroes })(App);
