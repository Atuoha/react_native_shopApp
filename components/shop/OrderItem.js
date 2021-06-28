import React from 'react'
import {Text, View, Button, StyleSheet, Platform} from 'react-native'
import Color from '../../constants/color'


const OrderItem = (props)=>{
    const {total, date } =  props

    return(
        <View style={styles.screen}>
            <View style={styles.grid}>
            <Text style={styles.total}>${total}</Text>
            <Text style={styles.date}>{'20-20-201'}</Text>

            </View>
            <Button title="Show Details" color={Color.primary} />
        </View>
    )
}


const styles = StyleSheet.create({
    screen:{
        margin: 20,
        padding: 10,        
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 5},
        shadowRadius: 10,
        elevation: 3,
        height: 100,
        borderRadius: 10
    },

    grid:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5
    },

    total:{
        fontWeight: 'bold'
    },

    date:{
        color: '#888',
        fontStyle: 'italic'
    }
})

export default OrderItem