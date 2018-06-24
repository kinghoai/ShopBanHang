import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import Swiper from 'react-native-swiper';

import slide1 from '../../../media/temp/maxi.jpg';
import slide2 from '../../../media/temp/midi.jpg';
import slide3 from '../../../media/temp/mini.jpg';
import slide4 from '../../../media/temp/party.jpg';

const { width, height } = Dimensions.get('window');

export class Category extends Component {
    render() {
        const { wapper, textTitle, banerStyle } = styles;
        return (
            <View style={wapper}>
                <View>
                    <Text style={textTitle}>LIST OF CATEGORY</Text>
                </View>
                <Swiper showsButtons={true}>
                    <Image source={slide1} style={banerStyle}/>
                    <Image source={slide2} style={banerStyle}/>
                    <Image source={slide3} style={banerStyle}/>
                    <Image source={slide4} style={banerStyle}/>
                </Swiper>
            </View>
        )
    }
}

const banerWidth = width - 40;
const banerHeight = width / 2;
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