import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

export class Category extends Component {
    render() {
        const { wapper, textTitle, banerStyle, cateTitle } = styles;
        const { onPress, types} = this.props;
        return (
            <View style={wapper}>
                <View>
                    <Text style={textTitle}>LIST OF CATEGORY</Text>
                </View>
                <Swiper showsButtons={true}>
                    {types.map(
                        e => (
                            <TouchableOpacity onPress={onPress} key ={e.id}>
                                <ImageBackground source={{uri: `http://kunkinapartment.xyz/images/type/${e.image}`}} style={banerStyle}>
                                    <Text style={cateTitle}>{e.name}</Text>
                                </ImageBackground >
                            </TouchableOpacity>
                        )
                    )}
                    
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