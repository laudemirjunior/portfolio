import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Projects from "../pages/projects";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
    </Switch>
  );
}
