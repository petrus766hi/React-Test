import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../pages/Login-screen';
import Dashboard from '../pages/Dashboard-screen';
// import {BottomNavigator} from '../components';
const hide = {headerShown: false};
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// const mainApp = () => {
//   return (
//     <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
//       <Tab.Screen name="Doctor" component={Doctor} />
//       <Tab.Screen name="Messages" component={Messages} />
//       <Tab.Screen name="Hospitals" component={Hospitals} />
//     </Tab.Navigator>
//   );
// };
const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} options={hide} />
      <Stack.Screen name="Login" component={Login} options={hide} />
      <Stack.Screen name="Dashboard" component={Dashboard} options={hide} />
    </Stack.Navigator>
  );
};
export default Router;
