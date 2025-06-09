import { DELETE_REVIEW,ME } from "../graphql/mutations";
import { useMutation } from "@apollo/client";

const useDeleteReview = () =>{

  const [mutate,{result}] = useMutation(DELETE_REVIEW,{
      refetchQueries: [
      {query: ME,
        variables: {
          includeReviews: true
        }
      }]
    } 
  );


  const deleteReview = async(reviewId) => {
    try {
      const data  = await mutate({variables:{deleteReviewId:reviewId,
        
      },
      });
      return data;
    } catch(error){
      throw new Error(error);
    }
  };
  

  return {deleteReview,result};


};



export default useDeleteReview;