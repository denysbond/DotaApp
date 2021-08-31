import React from "react";
import MyButton from "../UI/button/MyButton";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import HeroInfo from "./HeroInfo";
import classes from "./HeroDetails.module.css";

const HeroDetails = (props) => {
  const history = useHistory();

  console.log(props.hero);

  return (
    <div>
      <div className={classes.details}>
        <div className={classes.detailsContent}>
          <h1>Heroes Stats</h1>
          <MyButton
            style={{ width: "50px", padding: "0", marginLeft: "10px" }}
            onClick={() => history.goBack()}
          >
            Back
          </MyButton>
        </div>

        {props.hero.map((item) => {
          return <HeroInfo hero={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

const mapStateToprops = (state) => ({
  heroes: state.fetchHeroesReducer.heroes,
  hero: state.fetchHeroesReducer.detailedHero,
});

export default connect(mapStateToprops)(HeroDetails);
