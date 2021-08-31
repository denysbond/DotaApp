import React from "react";
import { Switch, Redirect, Route } from "react-router";
import Heroes from "./pages/Heroes";
import HeroDetails from "./HeroDetails/HeroDetails";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/heroes">
        <Heroes />
      </Route>{" "}
      <Route path="/herodetails/:id">
        <HeroDetails />
      </Route>
      <Redirect to="/heroes" />
    </Switch>
  );
};

export default AppRouter;
