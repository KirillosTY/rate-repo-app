import {View, Image,StyleSheet, FlexBox } from "react-native"
import Text from '../TextSets/Text'
import theme from '../../styles/theme';

const RepositoryItem = ({item}) => {

  const style = StyleSheet.create({
    container: {
      padding: 10,
      display:'wrap',
      flexDirection:'column',
      flexWrap:'wrap',
      display:'block',

      
    },
    nameAndImgcontainer: {
      flex:1,
      flexDirection:'row',
      justifyContent:'space-evenly',
      padding:20,


    },
    nameAndDescContainer: {
      flex:2,
      flexDirection:'column',
      justifyContent:'space-evenly',
      paddingLeft:10
      
    },
    image: {
      height: 50,
      width: 50,
      padding:10

    }})

  return(
  <View style={style.container}>
    <View style={style.nameAndImgcontainer}>
      <Image 
      style={style.image}
        source={{uri:item.ownerAvatarUrl}}
      />
     <View style={style.nameAndDescContainer}>
        <Text type='headline'>
          Full name: {item.fullName}
        </Text>
        <Text type='description' >
          Description: {item.description}
        </Text>
        <Text type= 'language'>
      {item.language}
    </Text>
      </View>
    </View>
   
    <View style={theme.numerals}>
      <Text>
        Forks: {item.forksCount > 1000? Math.round(item.forksCount/100,2)/10+"k": item.forksCount }
      </Text>
      <Text>
        Stars: {item.stargazersCount> 1000? Math.round(item.stargazersCount/100,2)/10+"k": item.stargazersCount }
      </Text>
      <Text>
        Reviews: {item.reviewCount > 1000? Math.round(item.reviewCount/100,2)/10+"k": item.reviewCount }
      </Text>
      <Text>
        Rating: {item.ratingAverage > 1000 ? Math.round(item.ratingAverage/100,2)/10+"k": item.ratingAverage}
      </Text>
    </View>

  </View>)

}

export default RepositoryItem