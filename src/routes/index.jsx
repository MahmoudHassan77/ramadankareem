import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Content from '../screens/Content';
import Counter from '../screens/Counter';
import SyamRules from '../screens/SyamRules';
import Calender from '../screens/Calender';
import Morning from '../screens/Morning';
import Evening from '../screens/Evening';
import ProfitPrayer from '../screens/ProfitPrayer';
import Broadcast from '../screens/Broadcast';

const Stack = createNativeStackNavigator();


const Root =()=>(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Content" component={Content} />
        <Stack.Screen name="Counter" component={Counter} />
        <Stack.Screen name="SyamRules" component={SyamRules} />
        <Stack.Screen name="Calender" component={Calender} />
        <Stack.Screen name="Morning" component={Morning} />
        <Stack.Screen name="Evening" component={Evening} />
        <Stack.Screen name="ProfitPrayer" component={ProfitPrayer} />
        <Stack.Screen name="Broadcast" component={Broadcast} />
      </Stack.Navigator>
    </NavigationContainer>
);

export default Root;