import React, { Component } from 'react';
import { StyleSheet, Text, View,} from 'react-native';

import { Header } from '../Header';
export class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Header onPress={()=>this.props.navigation.openDrawer()}/>
        <Text>
        Search Componenttttt
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A7ACDB',
  },
});
