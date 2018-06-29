import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const url = 'http://kunkinapartment.xyz/images/product/';
export class TopProduct extends Component {
    render() {
        const { onPress, products } = this.props;
        const { 
            container, titleContainer, title, 
            body, productContainer, productImage,
            productName, productPrice 
        } = styles;
        
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>TOP PRODUCT</Text>
                </View>
                <View style={body}>
                    {products.map(e => (
                        <TouchableOpacity style={productContainer} onPress={onPress} key = {e.id}>
                            <Image source={{uri: `${url}${e.images[0]}`}} style={productImage} />
                            <Text style={productName}>{e.name}</Text>
                            <Text style={productPrice}>{e.price}</Text>
                        </TouchableOpacity>
                    ))}
                    
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const productWidth = (width - 60) / 2;
const productImageHeight = (productWidth / 361) * 452; 

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10
    },
    title: {
        color: '#D3D3CF',
        fontSize: 20
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 10
    },
    productContainer: {
        width: productWidth,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        width: productWidth,
        height: productImageHeight
    },
    productName: {
        marginVertical: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#D3D3CF',
        fontWeight: '500'
    },
    productPrice: {
        marginBottom: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#662F90'
    }
});
