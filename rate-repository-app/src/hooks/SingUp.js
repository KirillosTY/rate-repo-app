import {useMutation} from '@apollo/client';
import {SIGN_UP} from '../graphql/mutations';
import { useApolloClient } from '@apollo/client';

const useSignUp = () => {
  const [mutate, {result}] = useMutation(SIGN_UP);
  const apolloClient = useApolloClient();

  const signUp = async (user) => {
    console.log('credentials', user);
    try {   

      const {data} = await mutate({ variables: {user: user} });
      apolloClient.resetStore();
      return data;
    } catch (err) {
      console.error('Sign-Up error:', err.message);
    }
    return "We failed";
  };
  

  return {signUp,result};
};


 

export default useSignUp;