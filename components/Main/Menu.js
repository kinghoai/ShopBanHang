import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export class Menu extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>
          Menu Componenttttt
        </Text>
        <TouchableOpacity onPress = {()=> navigate('Authentication')}>
           <Text>Go to Authentication</Text>
         </TouchableOpacity>

         <TouchableOpacity onPress = {()=> navigate('ChangeInfo')}>
           <Text>Go to ChangeInfo</Text>
         </TouchableOpacity>

         <TouchableOpacity onPress = {()=> navigate('OrderHistory')}>
           <Text>Go to OrderHistory</Text>
         </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});
