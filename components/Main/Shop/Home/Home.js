import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import { HomeView } from './HomeView';
import { ProductDetail } from '../ProductDetail/ProductDetail';
import { ListProduct } from '../ListProduct/ListProduct';

export const Home = StackNavigator({
  Home: { screen: HomeView },
  ProductDetail: { screen: ProductDetail },
  ListProduct: { screen: ListProduct },
},
{
  headerMode: 'none',
}
)
