import React from 'react';
import {View, Text} from 'react-native';
import Home from './components/Home';
import Details from './components/Details';
import Profile from './components/Profile';
import Recommended from './components/Recommended';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name = "Home" component = {Home}/>
      <Tab.Screen name = "Recommended" component = {Recommended}/>
      <Tab.Screen name = "Profile" component = {Profile}/>
    </Tab.Navigator>
  )
}

const App = () => {
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "TabNavigator" component = {TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default App;
