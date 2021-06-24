import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'


const ProductDetailsScreen = ({route, navigation})=>{
    const { id } = route.params
 return(
     <View style={styles.screen}>
         <Text>ProductDetailsScreen: {id}</Text>
         <Button onPress={() =>navigation.goBack()} title="click me" />
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

export default ProductDetailsScreen