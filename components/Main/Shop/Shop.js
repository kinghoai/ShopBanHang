import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TabNavigator } from 'react-navigation';

import { Cart } from './Cart/Cart';
import { Home } from './Home/Home';
import { Contact } from './Contact/Contact';
import { Search } from './Search/Search';

export const Shop = TabNavigator(
{
  Home: {
    screen: Home,
  },
  Cart: {
    screen: Cart,
  },
  Search: {
    screen: Search,
  },
  Contact: {
    screen: Contact,
  },
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      } else if (routeName === 'Settings') {
        iconName = `ios-options${focused ? '' : '-outline'}`;
      }
    },
  }),
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: '#FFF',
  },
  tabBarPosition: 'bottom',
}
)
