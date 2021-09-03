import React from "react";
import { Switch, Redirect, Route } from "react-router";
import Heroes from "./pages/Heroes";
import HeroDetails from "./HeroDetails/HeroDetails";
import SearchList from "./SearchList/SearchList";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Heroes />
      </Route>
      <Route path="/herodetails/:id">
        <HeroDetails />
      </Route>
      <Route path="/searchlist">
        <SearchList />
      </Route>

      <Redirect to="/" />
    </Switch>
  );
};

export default AppRouter;
