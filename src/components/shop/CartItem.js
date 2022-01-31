import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Platform } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const CartItem = props =>{
    return <View style={styles.cartItem}>
        <View style={styles.itemData}>
            <Text style={styles.quantity}>{props.quantity}  </Text>
            <Text style={styles.mainText}>{props.title}</Text>
        </View>
        <View style={styles.itemData}>
            <Text style={styles.mainText}>{props.amount}</Text>
            <TouchableOpacity onPress={props.onRemove} style={styles.deleteButton}>
                <Icon
                name={Platform.OS ==='android'? 'md-trash' : 'ios-trashh'}
                size={23}
                color='red'
                />
            </TouchableOpacity>
        </View>
    </View>
};

const styles = StyleSheet.create({
    cartItem: {
        backgroundColor: 'white',
        padding: 10,
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal: 20
    },

    itemData:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantity:{
        color: '#888',
        fontSize: 16,
    },
    mainText:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    
    deleteButton:{
        marginLeft: 20
    }

});

export default CartItem;