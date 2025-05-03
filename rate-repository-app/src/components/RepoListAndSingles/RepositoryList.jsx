import { FlatList, View, StyleSheet, Text } from 'react-native';
import RepositoryItem from './RepositoryItem';
import fetchRepositories from '../../hooks/useRepositories';


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});



const ItemSeparator = () => <View style={styles.separator} />;


const RepositoryList = () => {
  const { data, error, loading} =  fetchRepositories();

  console.log(loading, data,'listing');
  while(loading || error || !data){
    return (<View>
      <Text>Loading data</Text>
    </View>);
  }


  // Get the nodes from the edges array
  const repositoryNodes = data.repositories
    ? data.repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => <RepositoryItem item={item}/>}
    />
  );
};
export default RepositoryList;