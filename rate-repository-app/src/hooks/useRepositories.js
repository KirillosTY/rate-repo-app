import {useQuery} from '@apollo/client';
import {GET_REPOSITORIES} from '../graphql/queries';



  const useRepos =  (sortCategory, ascDesc, searchKeyword ) => {
    let sorting;
    let  keyword = searchKeyword;

    if(keyword === undefined){
      keyword ="";
    }

    if (sortCategory === undefined || sortCategory === ""){

      sorting = {
          "orderDirection": "ASC",
          "orderBy": "CREATED_AT",
          "searchKeyword": ""
        };
    } else {
      sorting = {
        "orderDirection": ascDesc,
        "orderBy": sortCategory,
        "searchKeyword": keyword

        };
      }
    

    
    const { data, error, loading } = useQuery(GET_REPOSITORIES, { 

      fetchPolicy: 'cache-and-network',
      variables: {
        orderDirection: sorting.orderDirection, 
        orderBy:sorting.orderBy,
        searchKeyword: sorting.searchKeyword}});


     
     
    return { data, loading, error };

  };


 

export default useRepos;