import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Header } from '../Header';

export class Contact extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Header onPress={()=>this.props.navigation.openDrawer()}/>
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
