import React from 'react';
import {ScrollView, View, Text, Image, Button, StyleSheet} from 'react-native';
// eslint-disable-next-line prettier/prettier
import {useSelector, useDispatch} from 'react-redux';
// import Icon from 'react-native-vector-icons/Ionicons';

import Colors from '../../constants/Colors';
import * as cartActions from '../../store/actions/cart';

const ProductDetailScreen = props => {
  const {productId} = props.route.params;
  const dispatch = useDispatch();

  const selectedProduct = useSelector(state =>
    state.products.avaliableProducts.find(prod => prod.id === productId),
  );

  props.navigation.setOptions({
    title: selectedProduct.title,
    // headerRight: (
    //     <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
    //       <Item title="search" iconName="ios-search" onPress={() => alert('search')} />
    //       <Item title="select" onPress={() => alert('select')} />
    //     </HeaderButtons>)
    //   ,
  });

  return (
    <ScrollView>
      <Image style={styles.image} source={{uri: selectedProduct.imageUrl}} />
      <View style={styles.actions}>
        {/* <Icon name="cart" size={30} color={Colors.primary} onPress={() => {}} /> */}

        <Button
          color={Colors.primary}
          title="Add to cart"
          onPress={() => {
            dispatch(cartActions.addToCart(selectedProduct));
          }}
        />
      </View>
      <Text style={styles.description}>
        ${selectedProduct.price.toFixed(2)}
      </Text>
      <Text style={styles.price}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  actions: {
    marginVertical: 10,
    alignItems: 'center',
  },
});

export default ProductDetailScreen;
