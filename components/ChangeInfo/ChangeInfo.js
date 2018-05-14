import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export class ChangeInfo extends Component {
  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>
          ChangeInfo Component
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
    backgroundColor: 'gray',
  },
});
