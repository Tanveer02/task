import {Dimensions, PixelRatio, Platform} from 'react-native';

type Orientation = 'portrait' | 'landscape';

// Retrieve initial screen dimensions
let screenWidth: number = Dimensions.get('window').width;
let screenHeight: number = Dimensions.get('window').height;

/**
 * Converts provided width percentage to independent pixel (dp).
 * @param widthPercent The percentage of screen's width that UI element should cover (e.g., "50%" or 50).
 * @returns The calculated dp depending on current device's screen width.
 */
export const widthPercentageToDP = (widthPercent: string | number): number => {
  const elemWidth: number =
    typeof widthPercent === 'number'
      ? widthPercent
      : parseFloat(widthPercent as string);

  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

/**
 * Converts provided height percentage to independent pixel (dp).
 * @param heightPercent The percentage of screen's height that UI element should cover (e.g., "50%" or 50).
 * @returns The calculated dp depending on current device's screen height.
 */
export const heightPercentageToDP = (
  heightPercent: string | number,
): number => {
  const elemHeight: number =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent as string);

  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

/**
 * Event listener for orientation change. Call in componentDidMount or constructor.
 * Updates the component's state.orientation on change.
 */
export const listenOrientationChange = (component: {
  setState: (state: {orientation: Orientation}) => void;
}): void => {
  Dimensions.addEventListener('change', ({window}) => {
    screenWidth = window.width;
    screenHeight = window.height;

    component.setState({
      orientation: screenWidth < screenHeight ? 'portrait' : 'landscape',
    });
  });
};

/**
 * Removes the orientation change listener. Call in componentWillUnmount.
 */
export const removeOrientationListener = (): void => {
  Dimensions.removeEventListener('change', () => {});
};

// Platform constants
export const isIOS: boolean = Platform.OS === 'ios';
export const isANDROID: boolean = Platform.OS === 'android';
export const isiPAD: boolean = screenHeight / screenWidth < 1.6;

// Scale factor based on iPhone 6 scale
const baseWidth = 375;
export const scale = screenWidth / baseWidth;

/**
 * Normalizes font size across devices.
 * @param size The original size (e.g., from design specs).
 * @returns The normalized size adjusted for screen scale.
 */
export const normalize = (size: number): number => {
  const newSize = size * scale;

  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }

  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

// Export current dimensions
export {screenWidth, screenHeight};
