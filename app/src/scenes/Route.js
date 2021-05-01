import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import Login from './Screens/Login';

export const Route = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="MyOrder" component={MyOrderNavigator} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
