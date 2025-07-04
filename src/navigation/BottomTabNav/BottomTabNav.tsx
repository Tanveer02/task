// navigation/RootTabs.tsx
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import type {RootTabParamList} from './RootTabs';
import {tabScreens} from './tabScreens';

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function RootTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          const iconName =
            route.name === 'Home'
              ? focused
                ? 'ios-home'
                : 'ios-home-outline'
              : focused
              ? 'ios-settings'
              : 'ios-settings-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: true,
      })}>
      {tabScreens?.map(({name, component, label}) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={{tabBarLabel: label}}
        />
      ))}
    </Tab.Navigator>
  );
}
