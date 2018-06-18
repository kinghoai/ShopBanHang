import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
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
