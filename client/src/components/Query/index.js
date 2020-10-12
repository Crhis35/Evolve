import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Spinner from '../spinner/spinner.component';

const Query = ({ children, query, id, start, limit }) => {
  const { data, loading, error, fetchMore } = useQuery(query, {
    variables: { id, start, limit },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <Spinner />;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  return children({ data, fetchMore });
};

export default Query;
