import React, { Component } from 'react';
import { StyleSheet, ScrollView, } from 'react-native';
import axios from 'axios';

import { Collection } from './Collection';
import { Header } from '../Header';
import { Category } from './Category';
import { TopProduct } from './TopProduct';

export class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      types: [],
      products: []
    };
  }
// componentDidMount() {
//   const URL = "http://kunkinapartment.xyz/";
//   axios.get(URL)
//   .then((response) => {
//     const { type } = response;
//     this.setState({ types: type });
//   })
//   .catch(error => console.log(error))
// }
componentDidMount() {
  const URL = "http://kunkinapartment.xyz/";
  fetch(URL)
  .then(response=> response.json())
  .then(responseJSON => {
    const { type, product } = responseJSON;
    this.setState({ types: type, products: product });
  });
}
  render() {
    const { types, products } = this.state;
      const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <Header onPress={() => this.props.navigation.openDrawer()} />
        <Collection/>
        <Category  onPress={()=>navigate('ListProduct')} types={types}/>
        <TopProduct onPress={()=>navigate('ProductDetail', {
          name: products[1].name,
        })} products={products}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DAD9D7',
  },
});
