import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Peer} from './src/webrtc/Peer';
import {commonStyle} from './src/constants/commonStyle';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {View} from 'react-native';
import ImageSlider from './animatedSrc/ImageSlider/ImageSlider';
import BottomTabNav from './src/testNavigation/BottomTabNav/BottomTabNav';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={commonStyle.container}>
        {/* <ImageSlider /> */}
        <BottomTabNav />
      </View>
    </GestureHandlerRootView>
  );
}
