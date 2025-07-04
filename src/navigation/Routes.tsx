import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabBar from './BottomTabNav/BottomTabNav';

export default function Routes() {
  return (
    <NavigationContainer>
      <BottomTabBar />
    </NavigationContainer>
  );
}
