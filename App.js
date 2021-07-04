import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Appbar } from 'react-native-paper';
import RepoList from './components/RepoList';
import SearchBar from './components/SearchBar';

const theme = {
  colors: {
    primary: '#3F51B5',
  }
    
}

export default function App() {

  const [query, setQuery] = useState('')

  return (
    <View style={styles.container}>
        <Appbar.Header style={styles.appBar}> 
          <Appbar.Content title='Github Repo' />
        </Appbar.Header>
        
        <SearchBar theme={theme} setQuery={setQuery} theme={theme}/>
        <RepoList theme={theme} query={query} theme={theme} />
    </View>
  
  );
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },

  appBar: {
    backgroundColor: theme.colors.primary,
  },

});
