import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

import slide1 from '../../../../media/temp/maxi.jpg';
import slide2 from '../../../../media/temp/midi.jpg';
import slide3 from '../../../../media/temp/mini.jpg';
import slide4 from '../../../../media/temp/party.jpg';

const { width } = Dimensions.get('window');

export class Category extends Component {
    render() {
        const { wapper, textTitle, banerStyle, cateTitle } = styles;
        const { onPress } = this.props;
        return (
            <View style={wapper}>
                <View>
                    <Text style={textTitle}>LIST OF CATEGORY</Text>
                </View>
                <Swiper showsButtons={true}>
                    <TouchableOpacity onPress={onPress}>
                        <ImageBackground source={slide1} style={banerStyle}>
                            <Text style={cateTitle}>Maxi Dress</Text>
                        </ImageBackground >
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onPress}>
                        <ImageBackground source={slide2} style={banerStyle}>
                            <Text style={cateTitle}>Maxi Dress</Text>
                        </ImageBackground >
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onPress}>
                        <ImageBackground source={slide3} style={banerStyle}>
                            <Text style={cateTitle}>Maxi Dress</Text>
                        </ImageBackground >
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onPress}>
                        <ImageBackground source={slide4} style={banerStyle}>
                            <Text style={cateTitle}>Maxi Dress</Text>
                        </ImageBackground >
                    </TouchableOpacity>
                </Swiper>
            </View>
        )
    }
}

const banerWidth = width - 40;
const banerHeight = width / 2;
const styles = StyleSheet.create({
    wapper: {
        padding: 10,
        margin: 10,
        height: banerHeight + 55,
        backgroundColor: '#fff',
    },
    banerStyle: {
        width: banerWidth,
        height: banerHeight,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTitle: {
        color: '#D3D3D3',
        fontSize: 20,
        marginBottom: 10,
    },
    cateTitle: {
        fontSize: 20,
        fontFamily: 'Avenir',
        color: '#9A9A9A',
    }
})