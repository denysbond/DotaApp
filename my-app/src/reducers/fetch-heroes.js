import {
  FETCH_HEROES_START,
  FETCH_HEROES_SUCCESS,
  FETCH_HEROES_FAILURE,
  SEARCH_HEROES_LIST,
  SEARCH_HERO_DETAILS,
} from "../actions/fetch-heroes";

const initialState = {
  heroes: [],
  loading: false,
  error: null,
  newHero: [],
  detailedHero: [],
};

export const fetchHeroesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HEROES_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_HEROES_SUCCESS:
      return {
        ...state,
        loading: false,
        heroes: action.payload,
        error: null,
      };
    case FETCH_HEROES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SEARCH_HEROES_LIST:
      return {
        ...state,
        loading: false,
        newHero: action.payload,
      };
    case SEARCH_HERO_DETAILS:
      return {
        ...state,
        loading: false,
        detailedHero: action.payload,
      };

    default:
      return state;
  }
};
