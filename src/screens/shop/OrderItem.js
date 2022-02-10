import React, {useState} from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import CartItem from "../../components/shop/CartItem";
import Card from "../../components/UI/Card";
import Colors from "../../constants/Colors";

const OrderItem = props => {
    const [showDetails, setShowDetails] = useState(false);


    return <Card style={styles.orderItem}>
        <View style={styles.summary}>
            <Text style={styles.totalAmount}>${props.totalAmount.toFixed(2)}</Text>
            <Text style={styles.date}>{props.date}</Text>
        </View>

        {showDetails && <View style = {styles.detailItems}>
            {props.items.map(cartItem =>(
                <CartItem 
                quantity = {cartItem.quantity} 
                amount = {cartItem.sum} 
                title={cartItem.productTitle}
                />
            ))}
        </View> }

        
        <Button 
        title= {showDetails ?  'Hide details' : "Show Details" }
        color={Colors.primary} 
        onPress={()=> {
       setShowDetails(prevState => !prevState)
            }}/>
       
    </Card>
}

const styles = StyleSheet.create({
    orderItem:{

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
    detailItems: {
        width: '100%'
    }

})

export default OrderItem;











