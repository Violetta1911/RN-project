import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform} from 'react-native';
import Colors from '../../constants/Colors';
import Card from '../UI/Card';


const ProductItem = props => {
    let TouchableCpm = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCpm = TouchableNativeFeedback;
    }
    return (       
        <Card style = {styles.product}>
            <View style={styles.touchable}>
             <TouchableCpm onPress= {props.onSelect} useForeground>
                 <View>
                
            <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: props.image}}/>
            </View>
                  <View style={styles.details}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.price}>${props.price.toFixed(2)}</Text>

        </View>
        
        <View style={styles.actions}>
            {props.children}
        </View>
        </View>
    </TouchableCpm>
    </View>
    </Card>
    );
    
};

const styles = StyleSheet.create({
    product: {
        height: 300,
        margin: 20,
        overflow: 'hidden'

    },
        touchable: {
        overflow: 'hidden',
        borderRadius: 10,
    },

    imageContainer:{
        width:'100%',
        height: '60%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height:'100%',
    },
    details: {
        alignItems: 'center',
        padding: 10,
    },
    title:{
        fontFamily: 'dongle-bold',
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 4,
    },
    price:{
        fontSize: 14,
        color: '#888',
    },
    actions:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',   
         paddingHorizontal: 20, 
    }

});


export default ProductItem;