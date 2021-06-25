import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useSelector } from 'react-redux'

const ProductDetailsScreen = ({route, navigation})=>{
    const { id } = route.params
    const products = useSelector(state => state.products.products)
    const productDetails = products.find(product=> product.id === id)

    useEffect(()=>{
        navigation.setOptions({
            headerTitle: productDetails.name
        })
    }, [id])

 return(
     <View style={styles.screen}>
         <Text>ProductDetailsScreen: {productDetails.name}</Text>
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