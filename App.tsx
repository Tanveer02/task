import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Peer} from './src/webrtc/Peer';
import {commonStyle} from './src/constants/commonStyle';
import ImagesList from './animatedSrc/ImagesList/ImagesList';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {View} from 'react-native';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={commonStyle.container}>
        <ImagesList />
      </View>
    </GestureHandlerRootView>
  );
}
