import React, { useEffect, Suspense, lazy } from 'react';

import { Route } from 'react-router-dom';

import Spinner from '../../components/spinner/spinner.component';

const BlogPage = lazy(() =>
  import('../../components/blog-page/blog.page.component')
);
const BlogOverview = lazy(() =>
  import('../../components/blog-overview/blog.overview')
);

const Blog = ({ match }) => {
  useEffect(() => {}, []);
  return (
    <Suspense fallback={<Spinner />}>
      <Route exact path={`${match.path}`} component={BlogPage} />
      <Route path={`${match.path}/:blogId`} component={BlogOverview} />
    </Suspense>
  );
};

export default Blog;
