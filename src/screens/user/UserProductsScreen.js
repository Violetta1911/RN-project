import React from "react";
import { FlatList, Button, Alert } from "react-native";
import {useSelector, useDispatch} from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../components/UI/HeaderButton';

import Colors from "../../constants/Colors";
import * as productsActions from '../../store/actions/products'

const UserProductScreen = props => {
    const userProducts = useSelector(state => state.products.userProducts);
    const dispacth = useDispatch();

    const editProductHandler = id => {
        props.navigation.navigate('EditProduct', {productId: id})
    }


    props.navigation.setOptions({
        title: 'Your Products',
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title='Create' iconName='create' onPress={()=>{
              props.navigation.navigate('EditProduct', {productId: null} )
            }}/>
            </HeaderButtons>) 
        ,
      });

      const deleteHandler = (item) => {
          console.log('Delete')
          Alert.alert('Are you sure?', 'Do you really want to delete this item?', [
            {text: 'No', style: 'default'},
            {text: 'Yes', style: 'destructive', onPress: () =>  dispacth(productsActions.deleteProduct(item))}
        ])
    }


    return (
        <FlatList 
         data = {userProducts} 
         keyExtractor={item => item.id}
         renderItem={itemData => <ProductItem 
            image ={itemData.item.imageUrl} 
            title= {itemData.item.title} 
            price = {itemData.item.price} 
            onSelect = {() => {editProductHandler(itemData.item.id)}}
        >
            <Button color = {Colors.primary} title='Edit' onPress={()=> {editProductHandler(itemData.item.id)}}/>
            <Button  color = {Colors.primary}  title='Delete'  onPress={deleteHandler(itemData.item.id)}/>
                    
        </ProductItem> 
        }/>


    )
}



export default UserProductScreen;