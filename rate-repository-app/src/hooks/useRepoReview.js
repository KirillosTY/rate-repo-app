import {useQuery} from '@apollo/client';
import {GET_REVIEW} from '../graphql/queries';



  const useRepoReview =   (repositoryId) => {
    const { data, error, loading } = useQuery(GET_REVIEW, { 
      variables: {repositoryId: repositoryId}
    });

    if(!loading){
      console.log('reviews',loading, data);

    }
     
      return { data, loading, error };

   };

 

export default useRepoReview;