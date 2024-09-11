// src/screens/Details.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Details = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Details Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'blue',
  },
});

export default Details;
