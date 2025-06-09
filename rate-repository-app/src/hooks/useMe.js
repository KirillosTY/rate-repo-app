import {useQuery} from '@apollo/client';
import {ME} from '../graphql/queries';
import { NetworkStatus } from '@apollo/client';



  const useMeFetch =  (reviewIncluded) => {


    const { data, error, loading, refetch, networkStatus } = useQuery(ME, { 
      variables: {includeReviews: reviewIncluded},
      notifyOnNetworkStatusChange: true,

    
    });

    if (networkStatus === NetworkStatus.refetch) return 'Refetching!';


    if(!loading){
      console.log('reviews',loading, data);

    }
     
      return { data, loading, error, refetch, networkStatus };

   };

 

export default useMeFetch;