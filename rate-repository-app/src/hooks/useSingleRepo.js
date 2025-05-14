import {useQuery} from '@apollo/client';
import {GET_REPOSITORY} from '../graphql/queries';



  const useSingleRepoQuery =   (repositoryId) => {
    console.log('idGoing', repositoryId);
    const { data, error, loading } = useQuery(GET_REPOSITORY, {
      fetchPolicy: 'cache-and-network',
 
      variables: {repositoryId: repositoryId}
    });

    if(!loading){
      console.log('repositories',loading, data);

    }
     
      return { data, loading, error };

   };

 

export default useSingleRepoQuery;