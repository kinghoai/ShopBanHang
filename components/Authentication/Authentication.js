import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export class Authentication extends Component {
  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>
          Authentication Component
        </Text>
        <TouchableOpacity onPress = {()=> goBack()}>
          <Text>Go Back to Main</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
});
