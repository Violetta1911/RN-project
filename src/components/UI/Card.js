import _ from "lodash";
import React from "react";
import { View, StyleSheet} from "react-native";

const Card = props => {
return <View style={{...styles.card, ...props.styles}}>
        {props.children}

    </View>
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20
    }

})

export default Card;