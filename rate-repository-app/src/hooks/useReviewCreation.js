import { CREATE_REVIEW } from "../graphql/mutations";
import { useMutation } from "@apollo/client";

const useCreateReview = () =>{

  const [mutate,{result}] = useMutation(CREATE_REVIEW);


  const createReview = async(review) => {
    try {
      const data  = await mutate({variables:{review}});
      return data;
    } catch(error){
      throw new Error(error);
    }
  };
  

  return {createReview,result};


};



export default useCreateReview;