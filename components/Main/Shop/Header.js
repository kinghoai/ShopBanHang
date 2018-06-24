import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image, StyleSheet, TextInput } from 'react-native';

import icMenu from '../../../media/appIcon/ic_menu.png';
import icLogo from '../../../media/appIcon/ic_logo.png';

const { height } = Dimensions.get('window');

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtSearch: ''
        };
    }
    render() {
        const { wrapper, row1, textInput, iconStyle, titleStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={row1}>
                    <TouchableOpacity onPress={this.props.onPress}>
                        <Image source={icMenu} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle}>Wearing a Dress</Text>
                    <Image source={icLogo} style={iconStyle} />
                </View>
                <TextInput 
                    style={textInput}
                    placeholder="What do you want to buy?"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: { 
        height: height / 8, 
        backgroundColor: '#34B089', 
        padding: 10, 
        justifyContent: 'space-around'
    },
    row1: { flexDirection: 'row', justifyContent: 'space-between' },
    textInput: { 
        height: height / 23, 
        backgroundColor: '#FFF', 
        paddingLeft: 10,
        paddingVertical: 0 
    },
    titleStyle: { color: '#FFF', fontFamily: 'Avenir', fontSize: 20 },
    iconStyle: { width: 25, height: 25 }
});
