import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

import backSpecial from '../../media/appIcon/backs.png';

export class ChangeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtName: 'Nguyen Van Pho',
      txtAddress: '92 Le Thi Rieng / Ben Thanh',
      txtPhone: '01694472176'
    };
  }
  render() {
    const { goBack } = this.props.navigation;
    const {
      wrapper, header, headerTitle, backIconStyle, body,
      signInContainer, signInTextStyle, textInput
    } = styles;
    return (
      // <View style={styles.container}>
      //   <Text>
      //     ChangeInfo Component
      //   </Text>
      //   <TouchableOpacity onPress = {()=> goBack()}>
      //     <Text>Go Back to Main</Text>
      //   </TouchableOpacity>
      // </View>
      <View style={wrapper}>
        <View style={header}>
          <View />
          <Text style={headerTitle}>User Infomation</Text>
          <TouchableOpacity onPress={()=> goBack()}>
            <Image source={backSpecial} style={backIconStyle} />
          </TouchableOpacity>
        </View>
        <View style={body}>
          <TextInput
            style={textInput}
            placeholder="Enter your name"
            autoCapitalize="none"
          />
          <TextInput
            style={textInput}
            placeholder="Enter your address"
            autoCapitalize="none"
          />
          <TextInput
            style={textInput}
            placeholder="Enter your phone number"
            autoCapitalize="none"
          />
          <TouchableOpacity style={signInContainer}>
            <Text style={signInTextStyle}>CHANGE YOUR INFOMATION</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: '#fff' },
  header: { flex: 1, backgroundColor: '#2ABB9C', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10 },// eslint-disable-line
  headerTitle: { fontFamily: 'Avenir', color: '#fff', fontSize: 20 },
  backIconStyle: { width: 30, height: 30 },
  body: { flex: 10, backgroundColor: '#F6F6F6', justifyContent: 'center' },
  textInput: {
      height: 45,
      marginHorizontal: 20,
      backgroundColor: '#FFFFFF',
      fontFamily: 'Avenir',
      paddingLeft: 20,
      borderRadius: 20,
      marginBottom: 20,
      borderColor: '#2ABB9C',
      borderWidth: 1
  },
  signInTextStyle: {
      color: '#FFF', fontFamily: 'Avenir', fontWeight: '600', paddingHorizontal: 20
  },
  signInContainer: {
      marginHorizontal: 20,
      backgroundColor: '#2ABB9C',
      borderRadius: 20,
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'stretch'
  },
  signInStyle: {
      flex: 3,
      marginTop: 50
  }
});
