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

  while(loading || error || !data){
    return (<View>
      <Text>Loading data</Text>
    </View>);
  }

  return <RepositoryListContainer repositories={data.repositories}/>

  
};

export const RepositoryListContainer = ({repositories}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];
  console.log('repositoryNodes', repositoryNodes)
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => <RepositoryItem item={item}/>}
    />
  );

}


export default RepositoryList;