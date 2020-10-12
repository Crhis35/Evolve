import React from 'react';
import { Route } from 'react-router-dom';
import BlogPage from '../../components/blog-page/blog.page.component';
import BlogOverview from '../../components/blog-overview/blog.overview';

const Blog = ({ match }) => {
  return (
    <>
      <Route exact path={`${match.path}`} component={BlogPage} />
      <Route path={`${match.path}/:blogId`} component={BlogOverview} />
    </>
  );
};

export default Blog;
