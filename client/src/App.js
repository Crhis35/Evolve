import React, { lazy, Suspense } from 'react';

import { GlobalStyle } from './global.styles';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Spinner from './components/spinner/spinner.component';
const HomePage = lazy(() => import('./pages/home/homepage.component'));
const Blog = lazy(() => import('./pages/blog/blog.page'));

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/" component={HomePage} />
          <Route path="/blog" component={Blog} />
        </Suspense>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
