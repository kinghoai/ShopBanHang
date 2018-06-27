import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import { SearchView } from './SearchView';
import { ProductDetail } from '../ProductDetail/ProductDetail';

export const Search = StackNavigator({
  Search: { screen: SearchView },
  ProductDetail: { screen: ProductDetail },
},
{
  headerMode: 'none',
}
)
