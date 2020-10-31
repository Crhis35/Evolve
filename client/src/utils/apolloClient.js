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
  uri: 'https://fathomless-brook-13052.herokuapp.com/graphql',
});

export default client;
