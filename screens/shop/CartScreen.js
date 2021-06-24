import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'


const CartScreen = ({route, navigation})=>{
 return(
     <View style={styles.screen}>
         <Text>CartScreen</Text>
     </View>
 )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CartScreen