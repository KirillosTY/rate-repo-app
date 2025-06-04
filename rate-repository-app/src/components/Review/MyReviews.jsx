import SingleReview from "./SingleReview";

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

const MyReviews = ({reviews}) => {



return (
      <FlatList
        data={reviews}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({item}) => <SingleReview item={item}/>}
      />
  )

}

export default MyReviews