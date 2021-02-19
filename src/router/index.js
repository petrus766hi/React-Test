import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../pages/Login-screen';
import Dashboard from '../pages/Dashboard-screen';
import Process from '../pages/Process-screen';
import Schedule from '../pages/Schedule-screen';
import Account from '../pages/Account-screen';
import List from '../pages/List-screen';
import Detail from '../pages/Detail-screen';
import Cart from '../pages/Cart-screen';
import BottomNavigator from '../components/molecules/BottomNavigator';
// import {BottomNavigator} from '../components';
const hide = {headerShown: false};
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
//
const mainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Process" component={Process} />
      <Tab.Screen name="Schedule" component={Schedule} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};
const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} options={hide} />
      <Stack.Screen name="Login" component={Login} options={hide} />
      <Stack.Screen name="mainApp" component={mainApp} options={hide} />
      <Stack.Screen name="List" component={List} options={hide} />
      <Stack.Screen name="Detail" component={Detail} options={hide} />
      <Stack.Screen name="Cart" component={Cart} options={hide} />
    </Stack.Navigator>
  );
};
export default Router;
