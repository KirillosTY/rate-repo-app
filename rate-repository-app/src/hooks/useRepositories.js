import {useQuery} from '@apollo/client'
import {GET_REPOSITORIES} from '../graphql/queries'



  const fetchRepositories =  () => {
    
    const { data, error, loading } = useQuery(GET_REPOSITORIES, { 
      fetchPolicy: 'cache-and-network',
    });
     console.log('repositories',loading, data)
     
      return { data, loading, error };

   }

 

export default fetchRepositories;