import { FlatList, View, StyleSheet, Text, TextInput } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepos from '../../hooks/useRepositories';
import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';
import { useDebounce, useDebouncedCallback } from 'use-debounce';
import { Searchbar } from 'react-native-paper';
import  * as React from 'react';
import {useEffect} from 'react';



const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});



const ItemSeparator = () => <View style={styles.separator} />;


const RepositoryList = () => {
 
  const [sorting, setSorting] = useState("CREATED_AT ASC")

  const [sortCategory, ascDesc] = sorting.split(" ")

  const [searchQuery, setSearchQuery] = useState("")
  const [value] = useDebounce(searchQuery, 1000)
  console.log('searchQuery', searchQuery)

  useEffect(() => {
    console.log('Debounced value:', value);
  }, [value]);

  

  const { data, error, loading} =  useRepos(sortCategory, ascDesc,value);

  while(loading || error || !data){
    return (<View>
      <Text>Loading data</Text>
    </View>);
  }
  
  
  return (<>
    
    <Sorter sorting={sorting} setSorting={setSorting}/>
    <RepositoryListContainer 
    setSearchQuery={setSearchQuery} 
    repositories={data.repositories}
    searchQuery={searchQuery}
    />

  </>
  )

  
};




export const Sorter = ({sorting, setSorting}) =>{



  return (<Picker
  selectedValue={sorting}
  onValueChange={(itemValue) =>
    setSorting(itemValue)
  }>
    <Picker.Item label="Lastest repositories" value="CREATED_AT DESC" />
    <Picker.Item label="Highest rated repositories" value="RATING_AVERAGE DESC" />
    <Picker.Item label="Lowest rated repositories" value="RATING_AVERAGE ASC" />

  </Picker>)
}

export class RepositoryListContainer  extends React.Component{
    renderHeader = () => {
   
      const { setSearchQuery,searchQuery} = this.props

    return ( <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />)
    }

   render()
   {
     const repositoryNodes = this.props.repositories
      ? this.props.repositories.edges.map(edge => edge.node)
      : [];
    return (
    
      
      <FlatList
        data={repositoryNodes}
        ListHeaderComponent={this.renderHeader}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({item}) => <RepositoryItem item={item}/>}
      />
    );

    }
  }



export default RepositoryList;