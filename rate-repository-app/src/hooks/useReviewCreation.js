import { CREATE_REVIEW } from "../graphql/mutations";
import { ME } from "../graphql/queries";
import { useMutation } from "@apollo/client";

const useCreateReview = () =>{

  const [mutate,{result}] = useMutation(CREATE_REVIEW);


  const createReview = async(review) => {
    try {
      const data  = await mutate({variables:{review},
           refetchQueries: [
                {query: ME,
                  variables: {
                    includeReviews: true
                  }
                }]
              });
      return data;
    } catch(error){
      throw new Error(error);
    }
  };
  

  return {createReview,result};


};



export default useCreateReview;