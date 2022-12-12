import React from "react";
import IndexScreen from "./Screens/Index";
import CreateScreen from './Screens/Create';
import EditScreen from './Screens/Edit';
import ShowScreen from './Screens/Show';
import {Provider} from './Context/BlogContext'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();
const Navigation = () => {
    return(
        <Provider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Index">
                    <Stack.Screen name="Index" component={IndexScreen} />
                    <Stack.Screen name="Create" component={CreateScreen} />
                    <Stack.Screen name="Edit" component={EditScreen} />
                    <Stack.Screen name="Show" component={ShowScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>    
    ) 
}


export default Navigation;