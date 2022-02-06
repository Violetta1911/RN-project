import React from "react";
import{ FlatList, Text} from 'react-native';
import { useSelector } from "react-redux";
import Colors from "../../constants/Colors";
import OrderItem from "./OrderItem";

const OrdersScreen = props=> {
    const orders = useSelector(state => state.orders.orders);
    console.log('orders items:', orders )

    props.navigation.setOptions({
        title: 'Your orders',
            });

    return(
     <FlatList 
     data={orders}  
     keyExtractor = {item => item.id} 
     renderItem = {itemData => <OrderItem  date={itemData.item.readableDate} totalAmount = {itemData.item.totalAmount} items = {itemData.item.items} />}/>
        )
};

export default OrdersScreen;