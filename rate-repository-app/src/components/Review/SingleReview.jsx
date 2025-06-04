
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


const SingleReview = ({review}) => {

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

export default SingleReview