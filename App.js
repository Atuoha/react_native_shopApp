import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { TopNavigation } from './navigation/shopNavigation'

export default function App() {
  return (
   <NavigationContainer>
      <TopNavigation />
   </NavigationContainer>
  );
}

