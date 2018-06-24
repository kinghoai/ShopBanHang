import React, { Component } from 'react';
import { StyleSheet, Text, View, } from 'react-native';

import { Collection } from '../Collection';
import { Header } from '../Header';
import { Category } from '../Category';

export class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header onPress={() => this.props.navigation.openDrawer()} />
        <Collection/>
        <Category/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DAD9D7',
  },
});
