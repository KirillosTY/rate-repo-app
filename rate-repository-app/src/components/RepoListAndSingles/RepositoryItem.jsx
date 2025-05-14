import {View, Image,StyleSheet, FlexBox, Pressable, Button, Linking } from "react-native";
import Text from '../TextSets/Text';
import theme from '../../styles/theme';
import { useNavigate } from "react-router-native";

const RepositoryItem = ({item, singleView}) => {  

  const navigate = useNavigate()
  
  console.log(item);
  
  let showButton = false;
  

  if(singleView){
    showButton = true;
  } 

  const onClickRepo= async(id) =>{
    if(!singleView){
      navigate(id)

    }

  

}
  const style = StyleSheet.create({
    container: {
      padding: 10,
      flexDirection:'column',
      margin:10,
      flexGrow: 1,
      flex:1,
    },
    nameAndImgcontainer: {
      flex:1,
      flexDirection:'row',
      justifyContent:'space-evenly',
      padding:20,


    },
    nameAndDescContainer: {
      flexDirection:'column',
      justifyContent:'space-evenly',
      paddingLeft:10,
      alignSelf:'flex-start'
      
    },
    image: {
      height: 50,
      width: 50,
      padding:10

    },
    button:{
      height:50,
      width:100,
    },
    pressable:{
      flex:1
    }
  
  });

  return(
    <Pressable style={style.container} onPress={() => onClickRepo(item.id)}>
  <View style={style.pressable} testID="repositoryItem"  >
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
    {showButton? 
    <Button onPress={() => Linking.openURL(item.url)} style={style.button} display={false} title="Github"></Button>: undefined

    }

  </View>
  
  
  </Pressable>)
  
  ;

};



export default RepositoryItem;