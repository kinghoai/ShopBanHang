import React, { Component } from 'react';
import { StyleSheet, ScrollView, } from 'react-native';

import { Collection } from './Collection';
import { Header } from '../Header';
import { Category } from './Category';
import { TopProduct } from './TopProduct';

export class Home extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Header onPress={() => this.props.navigation.openDrawer()} />
        <Collection/>
        <Category/>
        <TopProduct/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DAD9D7',
  },
});
