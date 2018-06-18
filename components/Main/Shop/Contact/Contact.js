import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export class Contact extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
        Contact Componenttttt
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9A050F',
  },
});
