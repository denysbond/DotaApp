import axios from "axios";

export const FETCH_HEROES_START = "FETCH_HEROES_START";
export const FETCH_HEROES_SUCCESS = "FETCH_HEROES_SUCCESS";
export const FETCH_HEROES_FAILURE = "FETCH_HEROES_FAILURE";

const fetchHeroesStart = () => ({
  type: FETCH_HEROES_START,
});

const fetchHeroesSuccess = (heroes) => ({
  type: FETCH_HEROES_SUCCESS,
  payload: heroes,
});

const fetchHeroesFailure = (error) => ({
  type: FETCH_HEROES_FAILURE,
  payload: error,
});

export const fetchHeroes = () => {
  return (dispatch) => {
    dispatch(fetchHeroesStart);

    axios
      .get("https://api.opendota.com/api/heroStats")
      .then((response) => {
        const heroes = response.data;
        dispatch(fetchHeroesSuccess(heroes));
      })
      .catch((error) => {
        const errMsg = error.message;
        dispatch(fetchHeroesFailure(errMsg));
      });
  };
};