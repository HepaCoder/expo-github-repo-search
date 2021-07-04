import React, { useState } from 'react'
import { StyleSheet} from 'react-native';
import { TextInput } from 'react-native-paper';

const SearchBar = ({theme, setQuery}) => {
    const {colors} = theme
    const [ value, setValue ] = useState('')
    return (
        <TextInput 
          mode='outlined'
          label='Search Repository'
          returnKeyType='search'
          outlineColor={colors.primary}
          value={value}
          onChangeText={text => setValue(text)}
          onSubmitEditing={(e) => setQuery(e.nativeEvent.text)}
          outlineColor='#808080'
          theme={{
            colors:{
              primary: colors.primary,
              background: '#fff',
            }
          }}
          style={styles.searchBar}
        />
    )
}

export default SearchBar

const styles = StyleSheet.create({

    searchBar: {
      marginHorizontal: 15,
      marginTop: 10,
    }
  
  });
