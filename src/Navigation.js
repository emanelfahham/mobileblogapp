import React, {useState} from "react";
import IndexScreen from "./Screens/Index";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const HomeStack = () =>{
        <Stack.Navigator initialRouteName="Index">
             <Stack.Screen name="Index" component={IndexScreen} />
        </Stack.Navigator>
}

function App() {
  return (
    <NavigationContainer>
      <HomeStack/>
    </NavigationContainer>
  );
}