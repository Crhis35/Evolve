import React from "react";

import { GlobalStyle } from "./global.styles";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/home/homepage.component";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
