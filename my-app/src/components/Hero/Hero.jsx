import React from "react";
import classes from "./Hero.module.css";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { heroDetails } from "../../actions/fetch-heroes";

const Hero = ({ hero, index, heroes, ...props }) => {
  const history = useHistory();
  let url = "https://api.opendota.com";
  let src = `${url}${heroes[index].img}`;

  const searchDetails = () => {
    props.heroDetails(heroes, hero.id);
    history.push(`/herodetails/${hero.id}`);
  };

  return (
    <div onClick={searchDetails} className={classes.hero}>
      <img className={classes.heroImg} src={src} alt="logo" />
      <span className={classes.content}>{hero.localized_name}</span>
    </div>
  );
};

const mapStateToprops = (state) => ({});

export default connect(mapStateToprops, { heroDetails })(Hero);
