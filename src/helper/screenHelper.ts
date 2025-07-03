import {Dimensions, PixelRatio, Platform, ScaledSize} from 'react-native';

// Retrieve initial screen's width and height
let screenWidth: number = Dimensions.get('window').width;
let screenHeight: number = Dimensions.get('window').height;

/**
 * Converts provided width percentage to independent pixel (dp).
 * @param {number | string} widthPercent The percentage of screen's width that UI element should cover.
 * @return {number} The calculated dp depending on the current device's screen width.
 */
const widthPercentageToDP = (widthPercent: number | string): number => {
  const elemWidth: number =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);

  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

/**
 * Converts provided height percentage to independent pixel (dp).
 * @param {number | string} heightPercent The percentage of screen's height that UI element should cover.
 * @return {number} The calculated dp depending on the current device's screen height.
 */
const heightPercentageToDP = (heightPercent: number | string): number => {
  const elemHeight: number =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);

  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

/**
 * Event listener function that detects orientation change and triggers screen rerendering.
 * @param {React.Component} that Screen's class component this variable.
 */
const listenOrientationChange = (that: any): void => {
  Dimensions.addEventListener('change', ({window}: {window: ScaledSize}) => {
    screenWidth = window.width;
    screenHeight = window.height;

    that.setState({
      orientation: screenWidth < screenHeight ? 'portrait' : 'landscape',
    });
  });
};

// Platform-specific and device-specific utilities
const isIOS: boolean = Platform.OS === 'ios';
const isANDROID: boolean = Platform.OS === 'android';
const isiPAD: boolean = screenHeight / screenWidth < 1.6;
const scale: number = screenWidth / 375;

/**
 * Normalizes font sizes or dimensions based on screen size.
 * @param {number} size Size to normalize.
 * @return {number} The normalized size.
 */
const normalize = (size: number): number => {
  const newSize: number = size * scale;
  return Platform.OS === 'ios'
    ? Math.round(PixelRatio.roundToNearestPixel(newSize))
    : Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

export {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  screenWidth,
  screenHeight,
  listenOrientationChange,
  normalize,
  isANDROID,
  isIOS,
  isiPAD,
};
