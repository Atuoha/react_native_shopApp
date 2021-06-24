import React, {useEffect} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons'


const ProductOverScreen = ({route, navigation})=>{

    useEffect(()=>{
        navigation.setOptions({
            headerTitle: 'Shoppingly 🛒',
            headerRight: ()=>(
                <Ionicons name="ios-shopping-cart" size={25} onPress={()=> alert('cart')} />
            )}
        )
    })

 return(
     <View style={styles.screen}>
         <Text>ProductOverScreen</Text>
         <Button onPress={()=>navigation.navigate("Details", {id: '222'})} title="click me" />
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

export default ProductOverScreen