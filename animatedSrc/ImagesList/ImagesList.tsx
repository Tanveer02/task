import {Easing, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {commonStyle} from '../../src/constants/commonStyle';
import {Marquee} from '@animatereactnative/marquee';
import {width} from '../../src/constants/constants';
import Animated, {
  FadeIn,
  runOnJS,
  useAnimatedReaction,
  useSharedValue,
} from 'react-native-reanimated';
import {Stagger} from '@animatereactnative/stagger';

const imageData = [
  'https://i.pinimg.com/736x/90/25/4f/90254fad9b81273e05656aa2ba6aaa9b.jpg',
  'https://xinva.ai/wp-content/uploads/2023/12/111.jpg',
  'https://img.freepik.com/premium-photo/cartoon-char…h-glasses-backpack-generative-ai_974533-16980.jpg',
  'https://img.freepik.com/premium-photo/captivating-…boys-lovely-girls-digital-world_1142283-14470.jpg',
  'https://i.pinimg.com/736x/6c/c2/09/6cc2096f433ba9dc83697cac26d679f5.jpg',
];
export default function ImagesList() {
  const _itemWidth = width * 0.62;
  const itemHeight = _itemWidth * 1.67;
  const offset = useSharedValue(0);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const _itemSize = _itemWidth + 10; // 10 is the spacing between items

  useAnimatedReaction(
    () => {
      const floatindex =
        ((offset.value + width / 2) / _itemSize) % imageData?.length;
      return Math.abs(Math.floor(floatindex));
    },
    value => {
      // calculate the index
      // setState the index
      runOnJS(setActiveIndex)(value);
    },
  );

  const Item = ({image, index}: {image: string; index: number}) => {
    return (
      <View
        style={{
          width: _itemWidth,
          height: itemHeight,
          borderRadius: 16,
        }}>
        <Image source={{uri: image}} style={{flex: 0.9, borderRadius: 16}} />
      </View>
    );
  };

  return (
    <View style={[commonStyle.container, {backgroundColor: '#000'}]}>
      <View
        style={[
          StyleSheet.absoluteFillObject,
          {
            opacity: 0.5,
          },
        ]}>
        <Animated.Image
          key={`image-${activeIndex}`}
          style={{flex: 1}}
          source={{uri: imageData[activeIndex]}}
          blurRadius={50}
          entering={FadeIn.duration(1000)}
          exiting={FadeIn.duration(1000)}
        />
      </View>
      <Marquee spacing={16} reverse={false} position={offset}>
        <View style={[{flexDirection: 'row'}, commonStyle.list]}>
          {imageData.map((image, index) => (
            <Item key={`image-${index}`} image={image} index={index} />
          ))}
        </View>
      </Marquee>
      <Stagger>
        <Text style={{}}>AnimateReactNative.com</Text>
      </Stagger>
    </View>
  );
}

const styles = StyleSheet.create({});
