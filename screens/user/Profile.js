import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const Profile = ({route, navigation})=>{
    useEffect(() => {
        navigation.setOptions({
          headerTitle: "Profile",
          headerTitleStyle: {
            fontSize: 23,
          },
         
          headerLeft: () => (
            <Ionicons
              name="ios-menu"
              color={Platform.OS === "ios" ? Color.primary : "white"}
              size={35}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        });
      });
    return (
        <View style={styles.screen}>

            <Image source={require('../../assets/default.png')} style={styles.image}/>
            <Text>....</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    screen:{
        justifyContent: 'center',
        alignItems: 'center',
        margin:50,
    },


    image:{
        width: '75%',
        height: 232
    }
})

export default Profile


