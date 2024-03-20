import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import ChatScreen from './Pages/ChatScreen';
import Splash from './Pages/Splash';
import AnimatedExample from './Pages/AnimatedExample';
import Detail from './Pages/Detail';
import BasicCalendar from './Pages/BasicCalendar';
import BasicCarousel from './Pages/BasicCarousel';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Animation" component={AnimatedExample} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="BasicCalendar" component={BasicCalendar} />
      <Tab.Screen name="BasicCarousel" component={BasicCarousel} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // gestureEnabled: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default Router;
