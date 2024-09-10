

import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';


const App = () => {
  return (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text>
        Welcome to Ecommerce App!
      </Text>
    </View>
    <ScrollView style={styles.container}>
      <View style={styles.search}>
        <TextInput placeholder='Search'>

        </TextInput>
      </View>
      <View style={styles.grid}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </View>
      
    </ScrollView>
    
  </View>
  )
}

const Item = () => {
  return (
    <TouchableOpacity style={styles.cells}>
      <Text style={styles.text}>
        Shop item
      </Text>
  </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  grid:{
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  text:{
    color: 'red',
    fontSize: 20,
  },
  header:{
    height: 100,
    width: '100%',
    backgroundColor: 'cyan',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cells:{
    width: '48%',
    height: 100,
    borderWidth: 2,
    margin: '1%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  search:{
    borderWidth: 2,
    margin: '1%',
    padding: '2%',
  }
})

export default App;
