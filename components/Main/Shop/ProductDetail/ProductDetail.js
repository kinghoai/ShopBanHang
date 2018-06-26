import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export class ProductDetail extends Component {
    render() {
        const { goBack } = this.props.navigation;
        return (
            <View style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
                <Text>ProductDetail</Text>
                <TouchableOpacity onPress = {()=> goBack()}>
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}