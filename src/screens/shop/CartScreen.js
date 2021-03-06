import React from "react";
import {View, Text, FlatList, Button, StyleSheet} from 'react-native';
import Colors from "../../constants/Colors";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../../components/shop/CartItem";
import * as cartActions from '../../store/actions/cart';
import * as orderActions from '../../store/actions/orders';
import Card from '../../components/UI/Card'

const CartScreen = props =>{
    const dispatch = useDispatch();
    props.navigation.setOptions({
        title: 'Your Cart',
            });


    const cartTotalAmount = useSelector(state=> state.cart.totalAmount);
    
    const cartItems = useSelector(state=> {
        const transformedCartItems = [];
        for (const key in state.cart.items){
            transformedCartItems.push({
                productId: key,
                productTitle: state.cart.items[key].prodTitle,
                productPrice: state.cart.items[key].prodPrice,
                quantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum

            });
           
        }
        
        return transformedCartItems.sort((a,b)=>
        a.productId > b.productId ? 1 : -1
        ); 
    });

    return <View style={styles.screen}>
        <Card style={styles.summary}>
            <Text style={styles.summaryText}>
                Total:
                 <Text style={styles.amount}>${Math.round(cartTotalAmount.toFixed(2)*100)/100}
                 </Text>
            </Text>
            <Button 
            title="Order Now" 
            color={Colors.accent}
            disabled={cartItems.length === 0}
            onPress={()=> dispatch(orderActions.addOrder(cartItems, cartTotalAmount))}/>
        </Card>
        <FlatList
         data={cartItems} 
         keyExtractor={item=>item.productId} 
         renderItem={itemData => (
         <CartItem
             quantity={itemData.item.quantity}
             title={itemData.item.productTitle} 
             amount={itemData.item.sum} 
             onRemove={() => dispatch(cartActions.removeFromCart(itemData.item.productId))}
             deletable        
            />
        )}
        />
    </View>
};

const styles = StyleSheet.create({
screen:{
    margin: 20

},
summary:{
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
},
summaryText:{
    fontSize: 18
},
amount:{
    color: Colors.accent

},
});

export default CartScreen;