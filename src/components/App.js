import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import Natours from "./portfolio/Natours";
import Trillo from "./portfolio/Trillo";
import Nexter from "./portfolio/Nexter";
import SignUp from "./portfolio/SignUp";
import Certs from "./certs/Certs";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/project/Natours" exact component={Natours} />
        <Route path="/project/Nexter" exact component={Nexter} />
        <Route path="/project/Trillo" exact component={Trillo} />
        <Route path="/project/SignUp" exact component={SignUp} />
        <Route path="/certs/Certs" exact component={Certs} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
