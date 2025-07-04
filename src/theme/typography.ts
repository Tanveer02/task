/**
 * Get font's from this file
 */
import {StyleSheet, Platform} from 'react-native';
import {Dimensions} from 'react-native';
import {colors} from './colors';

/**
 * normalize function return's integer value for font size
 */
export function normalize(size: any) {
  return Math.ceil(size / Dimensions.get('window')?.fontScale);
}

export const fontsSize = {
  verySmall: normalize(10),
  small_11: normalize(11),
  small: normalize(12),
  small_13: normalize(13),
  default: normalize(14),
  medium_15: normalize(15),
  medium: normalize(16),
  large_17: normalize(17),
  large: normalize(18),
  extraLarge: normalize(20),
  middleLarge: normalize(22),
  extraLarger: normalize(24),
  doubleExtraLarge: normalize(26),
  mainHeadinSize: normalize(30),
  ratingSize: normalize(45),
};

/**
 * fontFamily returns fonts style according to platform
 */
export const fontFamily = {
  Bold: 'Caveat-Bold',
  Semibold: 'Caveat-SemiBold',
  Regular: 'Caveat-Regular',
  Medium: 'Caveat-Medium',
};

/**
 * There is no need to define font size in app explicitly
 */
export const fontStyle = StyleSheet.create({
  mainTitile: {
    color: colors.black,
    fontSize: fontsSize.mainHeadinSize,
    fontFamily: fontFamily.Bold,
  },
  regulerInterTitile: {
    color: colors.black,
    fontSize: fontsSize.default,
    fontFamily: fontFamily.Regular,
  },
  blackInterTitile: {
    color: colors.black,
    fontSize: fontsSize.default,
    fontFamily: fontFamily.Regular,
  },
});
