import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export class ListProduct extends Component {
    render() {
        const { goBack } = this.props.navigation;
        return (
            <View style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
                <Text>ListProduct</Text>
                <TouchableOpacity onPress = {()=> goBack()}>
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}