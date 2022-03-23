import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Content from '../screens/Content';

const Stack = createNativeStackNavigator();


const Root =()=>(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Content} />
      </Stack.Navigator>
    </NavigationContainer>
);

export default Root;