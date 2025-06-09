import Text from '../TextSets/Text';
import useSingleRepoQuery from "../../hooks/useSingleRepo";
import useRepoReview from "../../hooks/useRepoReview";
import { format, compareAsc } from "date-fns";
import theme from '../../styles/theme';
import {useParams } from 'react-router-native';
import RepositoryItem from "./RepositoryItem";
import { FlatList, View, StyleSheet } from 'react-native';


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


const SingleRepository = ({repository}) => {

  return (<View style={styles.container} >
    <RepositoryItem  item={repository} singleView={true}/>
    </View>
  );
};




const ReviewItem = ({review}) => {

  const date = format(review.createdAt, "dd/MM/yyyy");

  return (
    <View style={styles.reviewItem.container}>
      <View style={styles.reviewItem.rating}>
        <Text style={styles.reviewItem.ratingText}>{review.rating}</Text>
      </View>
      <View style={styles.reviewItem.textContainer}>
      <Text>{date}</Text>
      <Text type='description'>{review.text}</Text>
      </View>
    </View>
  )
}


const RepositorySingleView =  () => {  

  const {id} = useParams()
  
  const {data,loading,fetchMore} =  useRepoReview(id)
  const repositoryData = useSingleRepoQuery(id)
   
  if(repositoryData.loading  || loading ){
    return (<View> <Text>Loading!</Text></View>)
  }
const onEndReach = () => {
    fetchMore();
  };


  console.log('data', loading, data)
  const reviews= data? data.repository.reviews.edges.map(edge => edge.node): []
  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <SingleRepository repository={repositoryData.data.repository}/>
    
    }
    onEndReached={onEndReach}
    onEndReachedThreshold={4}
      // ...
    />
  );

}


const Review = (review) => {

}








export default RepositorySingleView;