import SingleReview from "./SingleReview";
import {StyleSheet, FlatList, View,Text} from 'react-native'
import useMeFetch from "../../hooks/useMe";


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
  },
   separator: {
    height: 10,
  },
});




const ItemSeparator = () => <View style={styles.separator} />;

const MyReviews = () => {

  
const {data,error,loading, refetch, NetworkStatus} = useMeFetch(true)


while(loading || error || !data){
    return (<View>
      <Text>Loading data</Text>
    </View>);
  }

console.log('data', data);

const reviews = data.me != null? data.me.reviews.edges.map(edge => edge.node): []

console.log('reviews', reviews)

if(data==null){
  return (<View><Text>No reviews</Text></View>)
}

return (
      <FlatList
        data={reviews}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({item}) => <SingleReview refetch={refetch} review={item}/>}
      />
  )

}

export default MyReviews