import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import { Cart } from './Cart/Cart';
import { Home } from './Home/Home';
import { Contact } from './Contact/Contact';
import { Search } from './Search/Search';

// import homeIconS from '../../../media/appIcon/Home';
// import homeIcon from '../../../media/appIcon/home0.png';
// import cartIconS from '../../../media/appIcon/cart.png';
// import cartIcon from '../../../media/appIcon/cart0.png';
// import searchIconS from '../../../media/appIcon/search.png';
// import searchIcon from '../../../media/appIcon/search0.png';
// import contactIconS from '../../../media/appIcon/contact.png';
// import contactIcon from '../../../media/appIcon/contact0.png';

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
},
{tabBarOptions: {
  activeTintColor: 'tomato',
  inactiveTintColor: 'gray',
},
tabBarPosition: 'bottom',
}
)