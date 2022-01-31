import React from 'react';
import { FlatList, Platform, Button} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../components/UI/HeaderButton';

import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';

const ProductsOverviewScreen = props => {

    props.navigation.setOptions({ 
      headerTitle:  'All products',
      // headerLeft: () => (
      //   <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      //   <Item title='Orders' onPress={()=>{
      //     props.navigation.navigate('Menu')
      //   }}/>
      //   </HeaderButtons>) ,
      headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title='Cart' iconName={Platform.OS === 'android' ? 'shopping-cart': 'ios-cart'} onPress={()=>{
        props.navigation.navigate('Cart')
      }}/>
      </HeaderButtons>) 
    })


    const products = useSelector(state => state.products.avaliableProducts);
    const dispatch = useDispatch();
    return ( 

  <FlatList 
    data = {products}
    keyExtractor={item => item.id} 
    renderItem={itemData => (
      <ProductItem 
      title= {itemData.item.title} 
    price = {itemData.item.price} 
    image = {itemData.item.imageUrl}
    onViewDetail = {()=> {props.navigation.navigate('ProductDetailScreen', {productId: itemData.item.id, 
    productTitle: itemData.item.title})}}
    onAddToCart = {()=>{
      dispatch(cartActions.addToCart(itemData.item))
    }}
    />      )}
    />
    
    );
}

  

export default ProductsOverviewScreen;