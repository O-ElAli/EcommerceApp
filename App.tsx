import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import { RootStackParamList } from './src/types/navigation';


const Stack = createNativeStackNavigator<RootStackParamList>();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home} //refers to the import or the location of whatever page/component is going to be used
          options={{title: 'Welcome'}} //multiples options, include a title for each page in needed
        />
        <Stack.Screen
          name="Details"
          component={Details}
          //options={{title: 'Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;