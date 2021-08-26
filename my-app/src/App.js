import React from "react";
import HeroForm from "./components/form/HeroForm";
import "./styles/App.css";
import logo from "./img/Dota2-01.png";
import { connect } from "react-redux";
import { fetchHeroes } from "./actions/fetch-heroes";
import { useEffect } from "react";
import HeroList from "./components/HeroList/HeroList";

function App(props) {
  useEffect(() => {
    props.fetchHeroes();
  }, []);
  console.log(props.heroesData);

  const heroes = props.heroesData;

  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="logo" />{" "}
        <h1 style={{ fontWeight: "100" }}>Heroes Dota 2</h1>
      </div>
      <HeroForm />
      <HeroList heroes={heroes} />
    </div>
  );
}

const mapStateToprops = (state) => ({
  heroesData: state.fetchHeroesReducer.heroes,
});

export default connect(mapStateToprops, { fetchHeroes })(App);
