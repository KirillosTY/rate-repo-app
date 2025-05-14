import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import Text from '../TextSets/Text';
import useAuthStorage from '../../hooks/useAuthStorage';
import { useQuery } from '@apollo/client';
import { ME } from '../../graphql/queries';
import { useApolloClient } from '@apollo/client';

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
  const {data}= useQuery(ME);

  if(data){
    signed = data.me;
  }

  const handleLogout = () => {
    authStorage.removeAccessToken();
    apolloClient.resetStore();
  };
 
  return(
    <View style={styles.container}>
          <ScrollView horizontal>
            
            <Link to="/">
              <Text  style={styles.item}>Repositories</Text>
            </Link>
            <Link to="/Creview">
              <Text style={styles.item}>Create Review</Text>
            </Link>
            {
             signed !== null?
               <Link onPress={handleLogout} to="/sign">
               <Text style={styles.item}>Sign Out</Text>
             </Link>
             : 
             <Link to="/sign">
              <Text style={styles.item}>Sign in</Text>
            </Link>
            }
           

            
          </ScrollView>
    </View>);

};

export default AppBar;

