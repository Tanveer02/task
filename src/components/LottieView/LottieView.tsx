import React, { useEffect, useRef } from 'react';
import LottieView from 'lottie-react-native';
import { StyleProp, ViewStyle } from 'react-native';
interface Animation {
  emoji?: any;
  style?: StyleProp<ViewStyle>;
}
export default function AnimationWithImperativeApi({ emoji, style }: Animation) {
  const animationRef = useRef<LottieView>(null);
  useEffect(() => {
    animationRef.current?.play();
  }, []);

  return (
    <LottieView style={[{ height: 50, width: 50 }, style]} ref={animationRef} source={emoji} />
  );
}
