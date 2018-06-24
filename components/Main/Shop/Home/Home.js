import React, { Component } from 'react';
import { StyleSheet, Text, View, } from 'react-native';

import { Header } from '../Header';

class Collection1 extends Component {
  render() {
    return (
      <View>
        <Text>
          Collection 1
        </Text>
      </View>
    );
  }
}

class Collection2 extends Component {
  render() {
    return (
      <View>
        <Text>
          Collection 2
      </Text>
      </View>
    );
  }
}

export class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header onPress={() => this.props.navigation.openDrawer()} />
        <Collection1 />
        <Collection2 />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0',
  },
});
