import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabBar from './BottomTabNav/BottomTabNav';
import {navigationRef} from '../helper/NVManager';

export default function Routes() {
  return (
    <NavigationContainer ref={navigationRef}>
      <BottomTabBar />
    </NavigationContainer>
  );
}
