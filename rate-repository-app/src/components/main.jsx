import { Text, StyleSheet, View } from 'react-native';
import RepositoryList from './RepoListAndSingles/RepositoryList';
import AppBar from './AppBar/AppBar';
import { Routes, Route } from 'react-router-native';
import SignIn from './SignIn/SignIn';

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

      </Routes>
    </View>
  );
};

export default Main;