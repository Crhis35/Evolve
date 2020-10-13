import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BlogPage from '../../components/blog-page/blog.page.component';
import BlogOverview from '../../components/blog-overview/blog.overview';

const Blog = ({ match }) => {
  return (
    <Switch>
      <Route exact path={`${match.path}`} component={BlogPage} />
      <Route path={`${match.path}/:blogId`} component={BlogOverview} />
    </Switch>
  );
};

export default Blog;
