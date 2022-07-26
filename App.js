import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Home from './components/Home';
import Details from './components/Details';
import Profile from './components/Profile';
import Recommended from './components/Recommended';
import colors from './assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

Entypo.loadFont();
MaterialCommunityIcons.loadFont();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
    tabBarOptions= {{
      styles: styles.tabBar,
      activeTinColor: colors.blue,
      inactivetinColor: colors.gray,
      showLabel: false,
    }}
    >
      <Tab.Screen name = "Home" component = {Home} options = {{
        tabBarIcon: ({color}) => (<Entypo name='home' size= {32} color={color} />),
      }}/>
      <Tab.Screen name = "Recommended" component = {Recommended} options ={{
        tabBarIcon: ({color}) => (<Entypo name='heart' size= {32} color={color} />),
      }}/>
      <Tab.Screen name = "Profile" component = {Profile} options ={{
        tabBarIcon: ({color}) => (<MaterialCommunityIcons name='account' size= {32} color={color} />),
      }}/>
    </Tab.Navigator>
  )
}

const App = () => {
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "TabNavigator" component = {TabNavigator} options= {{headerShown: false}}/>
          <Stack.Screen name = "Details" component = {Details} options= {{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    boredrTopRightRadius: 20,
  }
})

export default App;
