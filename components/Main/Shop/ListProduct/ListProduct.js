import React, { Component } from 'react';
import { 
    View, TouchableOpacity,
    Text, StyleSheet, ScrollView,
    Image, Dimensions
 } from 'react-native';

import backList from '../../../../media/appIcon/backList.png';
import sp1 from '../../../../media/temp/sp1.jpeg';

const { width } = Dimensions.get('window');

export class ListProduct extends Component {
    render() {
        const { goBack, navigate } = this.props.navigation;
        const {
            container, header, wrapper, backStyle, titleStyle,
            productContainer, productImage, productInfo, lastRowInfo,
            txtName, txtPrice, txtMaterial, txtColor, txtShowDetail
         } = styles;

        return (
            // <View style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
            //     <Text>ListProduct</Text>
            //     <TouchableOpacity onPress = {()=> goBack()}>
            //         <Text>Back</Text>
            //     </TouchableOpacity>
            //     <TouchableOpacity onPress = {()=> navigate('ProductDetail')}>
            //         <Text>Go to Detail</Text>
            //     </TouchableOpacity>
            // </View>
            <View style={container}>
                <ScrollView style={wrapper}>
                    <View style={header}>
                        <TouchableOpacity onPress={()=> goBack()}>
                            <Image source={backList} style={backStyle} />
                        </TouchableOpacity>
                        <Text style={titleStyle}>Party Dress</Text>
                        <View style={{ width: 30 }} />
                    </View>
                    <View style={productContainer}>
                        <Image style={productImage} source={sp1} />
                        <View style={productInfo}>
                            <Text style={txtName}>Lace Sleeve Si</Text>
                            <Text style={txtPrice}>117$</Text>
                            <Text style={txtMaterial}>Material silk</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>Colo RoyalBlue</Text>
                                <View style={{ backgroundColor: 'cyan', height: 16, width: 16, borderRadius: 8 }} />
                                <TouchableOpacity onPress = {()=> navigate('ProductDetail')}>
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={productContainer}>
                        <Image style={productImage} source={sp1} />
                        <View style={productInfo}>
                            <Text style={txtName}>Lace Sleeve Si</Text>
                            <Text style={txtPrice}>117$</Text>
                            <Text style={txtMaterial}>Material silk</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>Colo RoyalBlue</Text>
                                <View style={{ backgroundColor: 'cyan', height: 16, width: 16, borderRadius: 8 }} />
                                <TouchableOpacity onPress = {()=> navigate('ProductDetail')}>
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={productContainer}>
                        <Image style={productImage} source={sp1} />
                        <View style={productInfo}>
                            <Text style={txtName}>Lace Sleeve Si</Text>
                            <Text style={txtPrice}>117$</Text>
                            <Text style={txtMaterial}>Material silk</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>Colo RoyalBlue</Text>
                                <View style={{ backgroundColor: 'cyan', height: 16, width: 16, borderRadius: 8 }} />
                                <TouchableOpacity onPress = {()=> navigate('ProductDetail')}>
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={productContainer}>
                        <Image style={productImage} source={sp1} />
                        <View style={productInfo}>
                            <Text style={txtName}>Lace Sleeve Si</Text>
                            <Text style={txtPrice}>117$</Text>
                            <Text style={txtMaterial}>Material silk</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>Colo RoyalBlue</Text>
                                <View style={{ backgroundColor: 'cyan', height: 16, width: 16, borderRadius: 8 }} />
                                <TouchableOpacity onPress = {()=> navigate('ProductDetail')}>
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={productContainer}>
                        <Image style={productImage} source={sp1} />
                        <View style={productInfo}>
                            <Text style={txtName}>Lace Sleeve Si</Text>
                            <Text style={txtPrice}>117$</Text>
                            <Text style={txtMaterial}>Material silk</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>Colo RoyalBlue</Text>
                                <View style={{ backgroundColor: 'cyan', height: 16, width: 16, borderRadius: 8 }} />
                                <TouchableOpacity onPress = {()=> navigate('ProductDetail')}>
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBDBD8'
    },
    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5
    },
    wrapper: {
        backgroundColor: '#fff',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        margin: 10,
        paddingHorizontal: 10
    },
    backStyle: {
        width: 30,
        height: 30
    },
    productContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        borderTopColor: '#F0F0F0',
        borderBottomColor: '#FFF',
        borderLeftColor: '#FFF',
        borderRightColor: '#FFF',
        borderWidth: 1
    },
    titleStyle: {
        fontFamily: 'Avenir',
        color: '#B10D65',
        fontSize: 20
    },
    productImage: {
        width: width / 4,
        height: (width * 452) / 1444
    },
    productInfo: {
        justifyContent: 'space-between',
        marginLeft: 15,
        flex: 1
    },
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtName: {
        fontFamily: 'Avenir',
        color: '#BCBCBC',
        fontSize: 20,
        fontWeight: '400'
    },
    txtPrice: {
        fontFamily: 'Avenir',
        color: '#B10D65',
    },
    txtMaterial: {
        fontFamily: 'Avenir'
    },
    txtColor: {
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        fontFamily: 'Avenir',
        color: '#B10D65',
        fontSize: 11
    }
});