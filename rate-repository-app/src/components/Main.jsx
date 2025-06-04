import { Text, StyleSheet, View } from 'react-native';
import RepositoryList from './RepoListAndSingles/RepositoryList';
import AppBar from './AppBar/AppBar';
import { Routes, Route,  } from 'react-router-native';
import SignIn from './Sign/SignIn';
import RepositoryItem from './RepoListAndSingles/RepositoryItem';
import RepositorySingleView from './RepoListAndSingles/RepositorySingleView';
import CreateReview from './Review/CreateReview';
import SingUp from './Sign/signUp';
import MyReviews from './Review/MyReviews';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {


  return (
    <View style={styles.container}>
    <AppBar></AppBar>
      <Text>Rate Repository Application</Text>
      <Routes>
        <Route path="/" element={<RepositoryList></RepositoryList>}/>
        <Route path="/Sign" element={<SignIn/>}/>
        <Route path="/Creview" element={<CreateReview/>}/>
        <Route path="/myreviews" element={<MyReviews/>}/>
        
        <Route path="/signUp" element={<SingUp/>}/>

        <Route path=':id' element={<RepositorySingleView/>}></Route>
      </Routes>
    </View>
  );
};

export default Main;