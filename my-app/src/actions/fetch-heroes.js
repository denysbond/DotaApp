import axios from "axios";

export const FETCH_HEROES_START = "FETCH_HEROES_START";
export const FETCH_HEROES_SUCCESS = "FETCH_HEROES_SUCCESS";
export const FETCH_HEROES_FAILURE = "FETCH_HEROES_FAILURE";
export const SEARCH_HEROES_LIST = "SEARCH_HEROES_LIST";
export const SEARCH_HERO_DETAILS = "SEARCH_HERO_DETAILS";

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

const searchedHeroesList = (newHeroes) => ({
  type: SEARCH_HEROES_LIST,
  payload: newHeroes,
});

const searchedHeroDetails = (hero) => ({
  type: SEARCH_HERO_DETAILS,
  payload: hero,
});

export const fetchHeroes = () => {
  return (dispatch) => {
    dispatch(fetchHeroesStart());

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

export const searchedHeroes = (heroes, searchHero) => (dispatch) => {
  const newHero = heroes.filter((hero) => {
    return hero.localized_name.toLowerCase().includes(searchHero.toLowerCase());
  });

  dispatch(searchedHeroesList(newHero));
};

export const heroDetails = (heroes, id) => (dispatch) => {
  const detailedHero = heroes.filter((hero) => {
    return hero.id === id;
  });
  dispatch(searchedHeroDetails(detailedHero));
};
