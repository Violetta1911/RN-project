import React from 'react';
import { FlatList, Platform, Button} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../components/UI/HeaderButton';
import Colors from '../../constants/Colors'; 

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
      <Item title='Cart' iconName='shopping-cart' onPress={()=>{
        props.navigation.navigate('Cart')
      }}/>
      </HeaderButtons>) 
    })


    const products = useSelector(state => state.products.avaliableProducts);
    const dispatch = useDispatch();

    const selectedItemHandler = (id, title) => {
      props.navigation.navigate('ProductDetailScreen', {productId: id, 
        productTitle: title})
      
    } 

    return ( 

  <FlatList 
    data = {products}
    keyExtractor={item => item.id} 
    renderItem={itemData => (
      <ProductItem 
      title= {itemData.item.title} 
      price = {itemData.item.price} 
      image = {itemData.item.imageUrl}
      onSelect = {() => selectedItemHandler(itemData.item.id, itemData.item.title)}
    >
      <Button color = {Colors.primary} title='View Details' onPress={()=> selectedItemHandler(itemData.item.id, itemData.item.title)}/>
      <Button  color = {Colors.primary}  title='To Cart'  onPress={() => dispatch(cartActions.addToCart(itemData.item))}/>
     </ProductItem> 
     )}
    />
    
    );
}

  

export default ProductsOverviewScreen;