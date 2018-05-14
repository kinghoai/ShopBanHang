import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import { Authentication } from './components/Authentication/Authentication';
import { ChangeInfo } from './components/ChangeInfo/ChangeInfo';
import { Main } from './components/Main/Main';
import { OrderHistory } from './components/OrderHistory/OrderHistory';
import { StackNavigator } from 'react-navigation';

StatusBar.setHidden(true);

// export class App extends Component {
//   render() {
//     return (
//         <Main/>
//     );
//   }
// }

export const App = StackNavigator({
  Main: { screen: Main },
  Authentication: { screen: Authentication },
  ChangeInfo: { screen: ChangeInfo },
  OrderHistory: { screen: OrderHistory },
}, { headerMode: 'none' });

