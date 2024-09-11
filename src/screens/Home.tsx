

import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type HomeProps = {
    navigation: NativeStackScreenProps<RootStackParamList, 'Home'>['navigation'];
    route?: NativeStackScreenProps<RootStackParamList, 'Home'>['route']; // Make route optional
  };

const Home = ({ navigation }: HomeProps) => {
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
      <ScrollView horizontal={true} style={styles.container}>
        
        <HItem navigation={navigation} />
        <HItem navigation={navigation} />
        <HItem navigation={navigation} />
        <HItem navigation={navigation} />
      
      </ScrollView>
      <View style={styles.grid}>
        <VItem navigation={navigation} />
        <VItem navigation={navigation} />
        <VItem navigation={navigation} />
        <VItem navigation={navigation} />
        <VItem navigation={navigation} />
        <VItem navigation={navigation} />
        <VItem navigation={navigation} />
        <VItem navigation={navigation} />
        <VItem navigation={navigation} />
        <VItem navigation={navigation} />
        <VItem navigation={navigation} />
        <VItem navigation={navigation} />
        <VItem navigation={navigation} />
        <VItem navigation={navigation} />
      </View>
      
    </ScrollView>
    
  </View>
  )
}

const HItem = ({navigation}: HomeProps) => {
  return (
    <TouchableOpacity style={styles.cellsH}>
      <Text style={styles.text} onPress={() => navigation.navigate('Details')}>
        Shop item
      </Text>
  </TouchableOpacity>
  )
}

const VItem = ({ navigation }: HomeProps) => {
  return (
    <TouchableOpacity style={styles.cells}>
      <Text style={styles.text} onPress={() => navigation.navigate('Details')}>
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
  cellsH:{
    width: 180,
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

export default Home;
