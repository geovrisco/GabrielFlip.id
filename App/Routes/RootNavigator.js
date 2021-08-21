import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TransactionListScreen from '../Screens/TransactionListScreen';
import DetailScreen from '../Screens/DetailScreen';
import {routes} from '../Config/route';

const Stack = createNativeStackNavigator();
export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routes.TransactionListScreen}>
        <Stack.Screen
          component={TransactionListScreen}
          name={routes.TransactionListScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={DetailScreen}
          name={routes.DetailScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
