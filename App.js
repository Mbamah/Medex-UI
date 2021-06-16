import * as React from 'react';
import Constants from 'expo-constants';

import Home from './components/Home'
import Board from './components/Board'

// You can import from local files
// import AssetExample from './components/AssetExample';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// or any pure javascript modules available in npm

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Board" component={Board} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


