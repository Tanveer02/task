import Toast from 'react-native-toast-message';
import {I18N} from '../../i18n/i18n';

export const toastType = {
  success: 'success',
  error: 'error',
  info: 'info',
};

const toastCommonProps = {
  position: 'top',
  topOffset: 20,
  visibilityTime: 2000,
  onPress: () => Toast.hide(),
};
const CustomToast = {
  success: (title = '', subTitle = '') => {
    Toast.show({
      type: toastType.success,
      text1: title ?? I18N('customToast.success'),
      text2: subTitle,
      ...toastCommonProps,
    });
  },
  error: (title = '', subTitle = '') => {
    Toast.show({
      type: toastType.error,
      text1: title ?? I18N('customToast.error'),
      text2: subTitle,
      ...toastCommonProps,
    });
  },
  info: (title = null, subTitle = null) => {
    Toast.show({
      type: toastType.info,
      text1: title ?? I18N('customToast.info'),
      text2: subTitle,
      ...toastCommonProps,
    });
  },
};

export default CustomToast;
