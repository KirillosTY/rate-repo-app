import {StyleSheet, View,Alert,Button} from 'react-native'
import Text from '../TextSets/Text';
import { format, compareAsc } from "date-fns";
import theme from '../../styles/theme';
import { useNavigate } from "react-router-native";
import useDeleteReview from '../../hooks/useDeleteReview';
import { useEffect } from 'react';
import { resetCaches } from '@apollo/client';
import {isMobile} from 'react-device-detect';

const styles = StyleSheet.create({
  container: {
    flexWrap:'wrap',
    height:300
    
  },
  reviewItem: {
    container: {
      padding:20,
      flexDirection:'row'
    },
    textContainer: {
      flexDirection:'column',
      flex:1,
      margin:10
    },

    rating: {
      width:50,
      height:50,
      borderRadius:100,
      borderWidth:5,
      justifyContent:'center',
      borderColor: '#0366d6',
      margin:10
      
    },
    ratingText:{
      alignSelf:'center',
      color: '#0366d6'
    }
  }
});


const SingleReview = ({review, refetch}) => {

const date = format(review.createdAt, "dd/MM/yyyy");

const {deleteReview} = useDeleteReview()
const navigate = useNavigate()

const handleViewRepository = (id) => {
  console.log('clicked', id)
 navigate('/'+id, { replace: true });
};

const showAlert = () =>{
  if(isMobile){
  Alert.alert(
    'Delete review',
    'Are you sure you want to delete this review?',
    [
      {
        text: 'No',
        style: 'No',
      },
       {
        text: 'Yes',
        onPress: () => handleDeleteReview(review.id),
        style: 'Yes',
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          'This alert was dismissed by tapping outside of the alert dialog.',
        ),
    },
  );
  } else {
    handleDeleteReview(review.id)
  }
}

const handleDeleteReview = async (id)=> {
console.log('id', id)
console.log(isMobile, "is mobile")
 await deleteReview(id)
 await refetch()
  navigate("/")


}

return (


    <View style={styles.reviewItem.container}>
      <View style={styles.reviewItem.rating}>
        <Text style={styles.reviewItem.ratingText}>{review.rating}</Text>
      </View>
      <View style={styles.reviewItem.textContainer}>
      {review.repository.fullName? <Text style={theme.Headline}>{review.repository.fullName}</Text>: <></>}

      <Text>{date}</Text>
      <Text type='description'>{review.text}</Text>
      <View>
        <Button title="View repository" onPress={() => handleViewRepository(review.repository.id)}></Button>       
        <Button title="Delete review" onPress={() =>  showAlert()}></Button> 

      </View>
      </View>
      
    </View>
  )

}

export default SingleReview