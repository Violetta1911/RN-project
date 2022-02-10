import React, {useCallback, useEffect, useState} from "react";
import {View, Text, ScrollView, TextInput, StyleSheet} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useRoute } from "@react-navigation/native";

import { useSelector, useDispatch } from "react-redux";

import * as productsActions from '../../store/actions/products'
import CustomHeaderButton from '../../components/UI/HeaderButton';


const EditProductScreen = props => {
    const route = useRoute()
    const productId = route.params.productId
   
    const editedProduct = useSelector(state => state.products.userProducts.find(product => product.id === productId))

    props.navigation.setOptions({ 
        headerTitle: productId === null ? 'Add product'  : 'Edit product',
        headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='Save' iconName='check' onPress={submitHandler}/>
        </HeaderButtons>) 
      })

     const [title, setTitle] = useState(editedProduct ? editedProduct.title : ''); 
     const [imageUrl, setImageUrl] = useState(editedProduct ? editedProduct.imageUrl : '');
     const [price, setPrice] = useState('');
     const [description, setDescription] = useState(editedProduct ? editedProduct.description : '');

     console.log('title:', title)

     const dispatch = useDispatch();

    const submitHandler = useCallback(() => {
       if (editedProduct) {
           dispatch(productsActions.updateProduct(productId, title, description, imageUrl))
       } else {
        dispatch(productsActions.createProduct(title, description, imageUrl, +price))
       }
       props.navigation.goBack();
    },[])

    useEffect(()=>{
        props.navigation.setParams({submit: submitHandler});
    },[submitHandler])


    return <ScrollView>
        <View style = {styles.form}>
         <View style= {styles.formControl}>
           <Text style= {styles.lable}>Title</Text>
           <TextInput style= {styles.input} value={title} onChangeText={text => setTitle(text)}/>
        </View>
        <View style= {styles.formControl}>
           <Text style= {styles.lable}>Image</Text>
           <TextInput style= {styles.input} value={imageUrl} onChangeText={text => setImageUrl(text)}/>
        </View>
        {editedProduct ? null : (
            <View style= {styles.formControl}>
            <Text style= {styles.lable}>Price</Text>
            <TextInput style= {styles.input} value={price} onChangeText={text => setPrice(text)}/>
         </View>
        )}
        <View style= {styles.formControl}>
           <Text style= {styles.lable}>Description</Text>
           <TextInput style= {styles.input} value={description} onChangeText={text => setDescription(text)}/>
        </View>
        </View>
    </ScrollView> 
}

    
    

const styles = StyleSheet.create({
    form:{
        margin: 20,
    },
    formControl:{
        width: '100%',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    lable:{
        fontWeight: 'bold',
        marginVertical: 18,
    },
    input:{    
        paddingHorizontal: 2,
        paddingVertical: 5,
    },


})

export default EditProductScreen;
