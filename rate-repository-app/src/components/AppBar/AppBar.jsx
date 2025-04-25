import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import Text from '../TextSets/Text'

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



  return(
    <View style={styles.container}>
          <ScrollView horizontal>
            
            <Link to="/">
              <Text  style={styles.item}>Repositories</Text>
            </Link>
            <Link to="/Sign">
              <Text style={styles.item}>Sign in</Text>
            </Link>
            
          </ScrollView>
    </View>);

};

export default AppBar;

