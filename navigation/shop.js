import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/bottom-tabs'


const Stack = createStackNavigator()

export const topNavigation = ()=>{
    <Stack.Navigation>
        <Stack.Screen  />
    </Stack.Navigation>
}