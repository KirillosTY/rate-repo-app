import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import Text from '../TextSets/Text';
import useAuthStorage from '../../hooks/useAuthStorage';
import { useQuery } from '@apollo/client';
import { ME } from '../../graphql/queries';
import { useApolloClient } from '@apollo/client';
import useMeFetch from '../../hooks/useMe';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    
    
  },
  item: {
    color:"#e1e8e3",
    fontSize: 20,
    fontWeight: 'bold',
    padding:10
  }
});


const AppBar = () => {
  const apolloClient  = useApolloClient();
  let signed = null;
  
  const authStorage = useAuthStorage();
  console.log('first',authStorage.getAccessToken);
  console.log('authStorage', authStorage)
  const  {data}= useMeFetch(false)

  if(data){
    console.log('data.me', data.me)
    signed = data.me;
  }
  console.log('signed', signed)

  const handleLogout = () => {
    authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  const handleMyReviews = () => {

  }
 
  return(
    <View style={styles.container}>
          <ScrollView horizontal>
            
            <Link to="/">
              <Text  style={styles.item}>Repositories</Text>
            </Link>
           

            {
             signed?
             <>
             <Link to="/Creview">
              <Text style={styles.item}>Create Review</Text>
            </Link>
          
             <Link to="/myreviews">
                <Text style={styles.item}>My Reviews</Text>
            </Link>
               <Link onPress={handleLogout} to="/sign">
               <Text style={styles.item}>Sign Out</Text>
             </Link>
             </>
             :
             <>
              <Link to="/sign">
                <Text style={styles.item}>Sign in</Text>
              </Link>
                <Link to="/signUp">
                <Text style={styles.item}>Sign Up</Text>
              </Link>
              
            </>
            
            }
            
           

            
          </ScrollView>
    </View>);

};

export default AppBar;

