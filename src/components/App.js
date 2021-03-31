import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import Natours from "./portfolio/Natours";
import Trillo from "./portfolio/Trillo";
import Nexter from "./portfolio/Nexter";
import SignUp from "./portfolio/SignUp";
import Certs from "./certs/Certs";
import Emaily from "./portfolio/Emaily";
import Cupcake from "./portfolio/Cupcake";
import ChatApp from "./portfolio/ChatApp";
import PokeDex from "./portfolio/PokeDex";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/project/natours" exact component={Natours} />
        <Route path="/project/nexter" exact component={Nexter} />
        <Route path="/project/trillo" exact component={Trillo} />
        <Route path="/project/signup" exact component={SignUp} />
        <Route path="/project/emaily" exact component={Emaily} />
        <Route path="/project/cupcake" exact component={Cupcake} />
        <Route path="/project/chatapp" exact component={ChatApp} />
        <Route path="/project/pokedex" exact component={PokeDex} />
        <Route path="/certs/Certs" exact component={Certs} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
