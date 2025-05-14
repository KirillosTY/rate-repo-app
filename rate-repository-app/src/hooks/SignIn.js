import {useMutation} from '@apollo/client';
import {SIGN_IN} from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const [mutate, {result}] = useMutation(SIGN_IN);
  const apolloClient = useApolloClient();

  const signIn = async (credentials) => {
    console.log('credentials', credentials);
    try {   

      const {data} = await mutate({ variables: {credentials} });
      await authStorage.setAccessToken(data.authenticate.accessToken);
      apolloClient.resetStore();
      return data;
    } catch (err) {
      console.error('Sign-in error:', err.message);
    }
    return "We failed";
  };
  

  return {signIn,result};
};


 

export default useSignIn;