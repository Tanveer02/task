import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {tabScreens} from './tabScreens';
import {RootTabParamList} from '../../types/types';
import {colors} from '../../theme/colors';
import {StyleSheet, Text, View} from 'react-native';
import Icon from '../../components/Icon/Icon';

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function RootTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: styles.tabBar,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIconStyle: styles.tabBarIcon,

        tabBarIcon: ({focused, color, size}) => {
          const cfg = tabScreens?.find(s => s.name === route.name)!;
          const iconName = focused ? cfg?.icon?.active : cfg?.icon?.inactive;

          return (
            <Icon
              family={cfg?.family}
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      })}>
      {tabScreens.map(({name, component, label}) => (
        <Tab.Screen
          key={name}
          name={name as any}
          component={component}
          options={{tabBarLabel: label}}
        />
      ))}
    </Tab.Navigator>
  );
}

export const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    left: 20,
    right: 20,
    height: 60,
    backgroundColor: colors.primaryColor,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    elevation: 5,
  },
  tabBarIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
