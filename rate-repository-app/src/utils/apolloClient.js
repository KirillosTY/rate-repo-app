import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import Constants from 'expo-constants';
import {setContext} from '@apollo/client/link/context';
import { relayStylePagination } from '@apollo/client/utilities';

const createApolloClient = (authStorage) => {

  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await authStorage.getAccessToken();
      console.log( `Bearer ${accessToken}`);
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
      };
    } catch (e) {
      console.log(e);
      return {
        headers,
      };
    }
  });

  const httpLink = createHttpLink({
    uri:Constants.expoConfig.extra.apollo_uri
  });
  const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        repositories: relayStylePagination(),
      },
    },

    Repository: {
      fields: {
        reviews: relayStylePagination(),
      },
    },
  },
});
    console.log('uri', Constants.expoConfig.extra.apollo_uri);
    console.log('httpLink', httpLink);  
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache
  });
};

export default createApolloClient;