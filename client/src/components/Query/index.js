import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Spinner from '../spinner/spinner.component';

const Query = ({ children, query, id }) => {
  const { data, loading, error } = useQuery(query, {
    variables: { id: id },
  });

  if (loading) return <Spinner />;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  return children({ data });
};

export default Query;
