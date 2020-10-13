import { ApolloClient, InMemoryCache } from '@apollo/client';

import { offsetLimitPagination } from '@apollo/client/utilities';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        posts: offsetLimitPagination(),
      },
    },
  },
});

const client = new ApolloClient({
  cache,
  uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`,
});

export default client;
