import React from 'react';

import { GlobalStyle } from './global.styles';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/home/homepage.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Blog from './pages/blog/blog.page';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/blog" component={Blog} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
