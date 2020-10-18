import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Spinner from '../spinner/spinner.component';
import ErrorComponent from '../error/error.component';

const Query = ({ children, query, id, start, limit, sort, config }) => {
  const { data, loading, error, fetchMore } = useQuery(query, {
    variables: { id, start, limit, sort },
    ...config,
  });
  if (loading) return <Spinner />;
  if (error) return <ErrorComponent />;

  return children({ data, fetchMore });
};

export default Query;
