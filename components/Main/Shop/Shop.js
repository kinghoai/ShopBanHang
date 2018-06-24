import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import { Cart } from './Cart/Cart';
import { Home } from './Home/Home';
import { Contact } from './Contact/Contact';
import { Search } from './Search/Search';

export const Shop = createBottomTabNavigator(
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
}
)