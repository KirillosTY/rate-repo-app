import {useQuery} from '@apollo/client';
import {GET_REVIEW} from '../graphql/queries';



  const useRepoReview =   (repositoryId) => {
    const variables =  {
      repositoryId: repositoryId,
      pageSize: 5,
    }


    const { data, error, loading, fetchMore,} =  useQuery(GET_REVIEW, {
      fetchPolicy: 'cache-and-network',

      variables: {
      repositoryId: repositoryId,
      pageSize: 2,
    }
    });

    const handleFetchPages = () => {

        const handleFetchMore = !loading && data?.repository.reviews.pageInfo.endCursor
        
        console.log('handleFetchMore', handleFetchMore, data)
        if(!handleFetchMore){
          return;
        
        }

      fetchMore({
        variables:{
        after: data?.repository.reviews.pageInfo.endCursor,
        repositoryId: repositoryId,
        pageSize: 2,
    
        }
      });
    }

    if(!loading){
      console.log('reviews this',loading, data);

    } 

    return { data, loading, error, fetchMore: handleFetchPages };


   };

 

export default useRepoReview;