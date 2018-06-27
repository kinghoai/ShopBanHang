import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import { CartView } from './CartView';
import { ProductDetail } from '../ProductDetail/ProductDetail';

export const Cart = StackNavigator({
  Cart: { screen: CartView },
  ProductDetail: { screen: ProductDetail },
},
{
  headerMode: 'none',
}
)
