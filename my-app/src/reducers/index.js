import { combineReducers } from "redux";
import { fetchHeroesReducer } from "./fetch-heroes";

export default combineReducers({
  fetchHeroesReducer,
});
