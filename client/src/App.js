import React from "react";

import { GlobalStyle } from "./global.styles";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/home/homepage.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";


const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Footer/>
    </>
  );
};

export default App;
