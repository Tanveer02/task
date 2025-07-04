// navigation/RootTabs.tsx
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {tabScreens} from './tabScreens';
import {RootTabParamList} from '../../types/types';
import {colors} from '../../theme/colors';
import {StyleSheet} from 'react-native';
import Icon from '../../components/Icon/Icon';

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function RootTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: styles.tabBar,
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          const iconName =
            route?.name == 'Home'
              ? focused
                ? 'ios-home'
                : 'ios-home-outline'
              : focused
              ? 'ios-settings'
              : 'ios-settings-outline';

          return (
            <Icon
              family={'AntDesign'}
              name={iconName}
              size={size}
              color={color}
            />
          );
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
});
