import React, {useState} from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import CartItem from "../../components/shop/CartItem";
import Colors from "../../constants/Colors";

const OrderItem = props => {
    const {showDetails, setShowDetails} = useState(false);

    return <View style={styles.orderItem}>
        <View style={styles.summary}>
            <Text style={styles.totalAmount}>${props.totalAmount.toFixed(2)}</Text>
            <Text style={styles.date}>{props.date}</Text>
        </View>
        
        <Button title="Show Details" color={Colors.primary} onPress={()=> setShowDetails(prevState => !prevState)}/>
        {showDetails&& <View>
            {props.items.map(cartItem => <CartItem quantity = {cartItem.quantity} amount = {cartItem.sum} title={cartItem.productTitle}/>)}
        </View> }

    </View>
}

const styles = StyleSheet.create({
    orderItem:{
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 20,
        padding: 10,
        alignItems:"center"
    },
    summary:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 40,
    },

    totalAmount:{
        fontWeight: 'bold',
        fontSize: 16,
    },
    date:{
        fontSize: 16,
        color: '#888',
    },


})

export default OrderItem;











