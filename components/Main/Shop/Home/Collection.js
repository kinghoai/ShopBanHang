import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';

import bannerCollection from '../../../../media/temp/banner.jpg';

const { width, height } = Dimensions.get('window');

export class Collection extends Component {
    render() {
        const { wapper, textTitle, banerStyle } = styles;
        return (
            <View style={wapper}>
                <View>
                    <Text style={textTitle}>Spring Collection</Text>
                </View>
                <View>
                    <Image source={bannerCollection} style={banerStyle}/>
                </View>
            </View>
        )
    }
}

const banerWidth = width - 40;
const banerHeight = width / 933 * 465;
const styles = StyleSheet.create ({
    wapper: {
        padding: 10,
        margin: 10,
        height: banerHeight + 55,
        backgroundColor: '#fff',
    },
    banerStyle: {
        width: banerWidth,
        height: banerHeight,
    },
    textTitle: {
        color: '#D3D3D3',
        fontSize: 20,
        marginBottom: 10,
    }
})