import {
  FETCH_HEROES_START,
  FETCH_HEROES_SUCCESS,
  FETCH_HEROES_FAILURE,
} from "../actions/fetch-heroes";

const initialState = {
  heroes: [],
  loading: false,
  error: null,
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
    default:
      return state;
  }
};
