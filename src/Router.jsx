import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import ChatScreen from './Pages/ChatScreen';
import Splash from './Pages/Splash';
import AnimatedExample from './Pages/AnimatedExample';
import Detail from './Pages/Detail';
import BasicCalendar from './Pages/BasicCalendar';
import BasicCarousel from './Pages/BasicCarousel';
import Home from './Pages/Home';
import Settings from './Pages/Settings';
import Notice from './Pages/Notice';
import NoticeDetail from './Pages/NoticeDetail';
import CustomCameraRoll from './components/CustomCameraRoll';
import VideoPlayer from './Pages/VideoPlayer';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="VideoPlayer" component={VideoPlayer} />
      <Tab.Screen name="Settings" component={Settings} />
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
      <Stack.Screen name="Notice" component={Notice} />
      <Stack.Screen name="NoticeDetail" component={NoticeDetail} />
      <Stack.Screen name="CustomCameraRoll" component={CustomCameraRoll} />
      <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
    </Stack.Navigator>
  );
};

export default Router;
