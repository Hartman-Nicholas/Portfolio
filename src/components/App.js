import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import SignUp from "./portfolio/SignUp";
import Emaily from "./portfolio/Emaily";
import ChatApp from "./portfolio/ChatApp";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/project/SignUp" exact component={SignUp} />
        <Route path="/project/Emaily" exact component={Emaily} />
        <Route path="/project/ChatApp" exact component={ChatApp} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
